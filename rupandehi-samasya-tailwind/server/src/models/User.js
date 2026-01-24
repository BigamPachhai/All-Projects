const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: { type: String, default: "info" },
  message: String,
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    passwordHash: String,
    googleId: String,
    role: {
      type: String,
      enum: ["citizen", "admin"],
      default: "citizen"
    },
    avatarColor: String,
    points: { type: Number, default: 0 },
    monthlyPoints: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: true },
    notifications: [notificationSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
