const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
  sentiment: String,
  createdAt: { type: Date, default: Date.now }
});

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["waste", "water", "electrical", "road", "other"],
      required: true
    },
    locationName: { type: String, required: true },
    locationType: {
      type: String,
      enum: ["predefined", "manual"],
      default: "manual"
    },
    coordinates: {
      lat: Number,
      lng: Number
    },
    imageUrl: String,
    resolutionPhotos: [String],
    status: {
      type: String,
      enum: ["pending", "in_progress", "resolved"],
      default: "pending"
    },
    priorityScore: { type: Number, default: 0 },
    isDuplicate: { type: Boolean, default: false },
    duplicateOf: { type: mongoose.Schema.Types.ObjectId, ref: "Issue" },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    isAnonymous: { type: Boolean, default: false },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    upvoteCount: { type: Number, default: 0 },
    comments: [commentSchema],
    resolvedAt: Date,
    resolutionNotes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
