const express = require("express");
const Issue = require("../models/Issue");

const router = express.Router();

router.get("/overview", async (req, res) => {
  try {
    const total = await Issue.countDocuments();
    const pending = await Issue.countDocuments({ status: "pending" });
    const inProgress = await Issue.countDocuments({
      status: "in_progress"
    });
    const resolved = await Issue.countDocuments({ status: "resolved" });

    const byCategory = await Issue.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);

    res.json({
      total,
      pending,
      inProgress,
      resolved,
      byCategory
    });
  } catch (err) {
    console.error("Stats error:", err.message);
    res.status(500).json({ message: "Error getting stats" });
  }
});

module.exports = router;
