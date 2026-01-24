const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Issue = require("../models/Issue");
const { authRequired } = require("../middleware/auth");
const {
  classifyCommentSentiment,
  detectDuplicateIssue
} = require("../services/aiService");

const router = express.Router();

const uploadDir = path.join(__dirname, "..", "..", "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_")
    )
});

const upload = multer({ storage });

// Public issue list
router.get("/", async (req, res) => {
  try {
    const { category, status, sort = "latest", search } = req.query;
    const query = {};
    if (category) query.category = category;
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { title: new RegExp(search, "i") },
        { description: new RegExp(search, "i") },
        { locationName: new RegExp(search, "i") }
      ];
    }

    let q = Issue.find(query)
      .populate("createdBy", "name points")
      .sort({ createdAt: -1 });

    if (sort === "top") {
      q = q.sort({ upvoteCount: -1 });
    } else if (sort === "priority") {
      q = q.sort({ priorityScore: -1 });
    }

    const issues = await q.limit(200);
    res.json(issues);
  } catch (err) {
    console.error("List issues error:", err.message);
    res.status(500).json({ message: "Error loading issues" });
  }
});

// Map data for heatmap
router.get("/map", async (req, res) => {
  try {
    const issues = await Issue.find(
      { "coordinates.lat": { $ne: null } },
      {
        coordinates: 1,
        status: 1,
        priorityScore: 1,
        upvoteCount: 1,
        category: 1,
        locationName: 1
      }
    ).sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    console.error("Map data error:", err.message);
    res.status(500).json({ message: "Error loading map data" });
  }
});

// Single issue with comments
router.get("/:id", async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate("createdBy", "name points")
      .populate("comments.user", "name");
    if (!issue) return res.status(404).json({ message: "Not found" });
    res.json(issue);
  } catch (err) {
    console.error("Get issue error:", err.message);
    res.status(500).json({ message: "Error loading issue" });
  }
});

// Create new issue
router.post(
  "/",
  authRequired,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        title,
        description,
        category,
        locationName,
        locationType,
        lat,
        lng,
        isAnonymous
      } = req.body;

      const imageUrl = req.file
        ? "/uploads/" + path.basename(req.file.path)
        : null;

      // simple priority from text length & category
      let priorityScore = 0;
      if (category === "road" || category === "electrical") priorityScore += 30;
      if (description && description.length > 80) priorityScore += 10;

      const newIssue = {
        title,
        description,
        category,
        locationName,
        locationType: locationType || "manual",
        coordinates:
          lat && lng
            ? { lat: parseFloat(lat), lng: parseFloat(lng) }
            : undefined,
        imageUrl,
        createdBy: req.user._id,
        isAnonymous: isAnonymous === "true" || isAnonymous === true,
        priorityScore
      };

      // Duplicate detection: find candidates near the same place & category
      let duplicateInfo = null;
      if (newIssue.coordinates && newIssue.category) {
        const { lat: la, lng: ln } = newIssue.coordinates;
        const latMin = la - 0.01;
        const latMax = la + 0.01;
        const lngMin = ln - 0.01;
        const lngMax = ln + 0.01;
        const candidates = await Issue.find({
          category: newIssue.category,
          "coordinates.lat": { $gte: latMin, $lte: latMax },
          "coordinates.lng": { $gte: lngMin, $lte: lngMax },
          status: { $ne: "resolved" }
        }).limit(3);
        if (candidates.length) {
          duplicateInfo = await detectDuplicateIssue(newIssue, candidates);
          if (
            duplicateInfo &&
            duplicateInfo.isDuplicate &&
            duplicateInfo.duplicateIndex != null
          ) {
            const idx = duplicateInfo.duplicateIndex - 1;
            const main = candidates[idx];
            return res.status(409).json({
              type: "DUPLICATE",
              duplicateOf: main,
              reason: duplicateInfo.explanation || "Possible duplicate"
            });
          }
        }
      }

      const issue = await Issue.create(newIssue);
      const populated = await issue.populate("createdBy", "name points");
      res.status(201).json(populated);
    } catch (err) {
      console.error("Create issue error:", err.message);
      res.status(500).json({ message: "Error creating issue" });
    }
  }
);

// Upvote toggle
router.post("/:id/upvote", authRequired, async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: "Not found" });

    const userId = req.user._id.toString();
    const has = issue.upvotes.some(
      (u) => u.toString() === userId
    );
    if (has) {
      issue.upvotes = issue.upvotes.filter(
        (u) => u.toString() !== userId
      );
    } else {
      issue.upvotes.push(req.user._id);
    }
    issue.upvoteCount = issue.upvotes.length;
    await issue.save();
    res.json({ upvoteCount: issue.upvoteCount });
  } catch (err) {
    console.error("Upvote error:", err.message);
    res.status(500).json({ message: "Error upvoting" });
  }
});

// Add comment
router.post("/:id/comments", authRequired, async (req, res) => {
  try {
    const { text } = req.body;
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: "Not found" });

    const sentiment = await classifyCommentSentiment(text);
    issue.comments.push({
      user: req.user._id,
      text,
      sentiment
    });
    await issue.save();
    await issue.populate("comments.user", "name");
    res.json(issue.comments);
  } catch (err) {
    console.error("Comment error:", err.message);
    res.status(500).json({ message: "Error adding comment" });
  }
});

module.exports = router;
