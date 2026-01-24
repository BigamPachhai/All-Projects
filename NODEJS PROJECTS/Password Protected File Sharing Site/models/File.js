import mongoose from "mongoose";
const FileSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  storageName: { type: String, required: true },
  size: { type: Number, required: true },
  passwordHash: { type: String },
  downloads: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("File", FileSchema);
