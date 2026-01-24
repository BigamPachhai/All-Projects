const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Issue = require("../models/Issue");
const User = require("../models/User");
const { authRequired } = require("../middleware/auth");
const { adminOnly } = require("../middleware/adminOnly");
const { generateIssueReportText } = require("../services/aiService");
const { generateIssuePdf } = require("../utils/pdfGenerator");

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

// Admin list issues
router.get("/issues", authRequired, adminOnly, async (req, res) => {
  try {
    const { category, status } = req.query;
    const q = {};
    if (category) q.category = category;
    if (status) q.status = status;
    const issues = await Issue.find(q)
      .populate("createdBy", "name email points")
      .sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    console.error("Admin list issues error:", err.message);
    res.status(500).json({ message: "Error loading admin issues" });
  }
});

// Change status
router.put(
  "/issues/:id/status",
  authRequired,
  adminOnly,
  async (req, res) => {
    try {
      const { status, resolutionNotes } = req.body;
      const issue = await Issue.findById(req.params.id).populate(
        "createdBy"
      );
      if (!issue) return res.status(404).json({ message: "Not found" });

      issue.status = status;
      if (resolutionNotes) issue.resolutionNotes = resolutionNotes;
      if (status === "resolved" && !issue.resolvedAt) {
        issue.resolvedAt = new Date();

        if (issue.createdBy) {
          let delta = 10;
          delta += issue.upvoteCount * 2;
          delta += (issue.priorityScore || 0) / 10;

          issue.createdBy.points += delta;
          issue.createdBy.monthlyPoints += delta;
          issue.createdBy.notifications.push({
            type: "issue_resolved",
            message: `तपाईंको उजुरी "${issue.title}" समाधान गरिएको छ। धन्यवाद!`
          });
          await issue.createdBy.save();
        }
      }
      await issue.save();
      res.json(issue);
    } catch (err) {
      console.error("Change status error:", err.message);
      res.status(500).json({ message: "Error updating status" });
    }
  }
);

// Upload completion photos
router.post(
  "/issues/:id/complete",
  authRequired,
  adminOnly,
  upload.array("photos", 3),
  async (req, res) => {
    try {
      const issue = await Issue.findById(req.params.id);
      if (!issue) return res.status(404).json({ message: "Not found" });

      const photos = (req.files || []).map(
        (f) => "/uploads/" + path.basename(f.path)
      );
      issue.resolutionPhotos = issue.resolutionPhotos || [];
      issue.resolutionPhotos.push(...photos);
      issue.status = "resolved";
      if (!issue.resolvedAt) issue.resolvedAt = new Date();
      await issue.save();
      res.json(issue);
    } catch (err) {
      console.error("Upload completion error:", err.message);
      res.status(500).json({ message: "Error uploading completion photos" });
    }
  }
);

// PDF report
router.get(
  "/issues/:id/report.pdf",
  authRequired,
  adminOnly,
  async (req, res) => {
    try {
      const issue = await Issue.findById(req.params.id).populate(
        "createdBy"
      );
      if (!issue) return res.status(404).json({ message: "Not found" });

      const reports = await generateIssueReportText(issue);
      const pdfBuffer = await generateIssuePdf(
        issue,
        issue.createdBy,
        reports
      );

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=issue-${issue._id}.pdf`
      );
      res.send(pdfBuffer);
    } catch (err) {
      console.error("PDF report error:", err.message);
      res.status(500).json({ message: "Error generating PDF" });
    }
  }
);

// Leaderboard
router.get("/leaderboard", authRequired, adminOnly, async (req, res) => {
  try {
    const top = await User.find(
      { role: "citizen" },
      { name: 1, points: 1, monthlyPoints: 1 }
    )
      .sort({ monthlyPoints: -1 })
      .limit(10);
    res.json(top);
  } catch (err) {
    console.error("Leaderboard error:", err.message);
    res.status(500).json({ message: "Error loading leaderboard" });
  }
});

module.exports = router;
