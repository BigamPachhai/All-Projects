import bcrypt from "bcrypt";
import path from "path";
import File from "../models/File";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Re upload form
export const getHome = (req, res) => {
  res.render("index");
};
//Handle file upload
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    const { password } = req.body;
    let passwordHash = null;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      passwordHash = await bcrypt.hash(password, salt);
    }
    const fileDoc = await File.create({
      originalName: req.file.originalname,
      storageName: req.file.filename,
      size: req.file.size,
      passwordHash,
    });

    res.render("uploaded", {
      fileId: fileDoc._id,
      baseUrl: process.env.BASE_URL,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
//Show download page
export const showDownloadPage = async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) {
    return res.status(404).send("File Not Found");
  }
  res.render("download", { file });
};
//Handle file download (password check)
export const downloadFile = async (req, res) => {
  const file = await File.findById(req.params.id);

  if (!file) {
    return res.status(404).send("File Not Found");
  }

  if (file.passwordHash) {
    const isMatch = await bcrypt.compare(
      req.body.password || " ",
      file.passwordHash
    );
    if (!isMatch) {
      return res.status(403).send("Invalid Password");
    }
  }
  file.downloads += 1;
  await file.save();

  const filePath = path.join(__dirname, "../uploads", file.storageName);
  res.download(filePath, file.originalName);
};
