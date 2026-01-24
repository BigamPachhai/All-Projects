import express from "express";
import upload from "../middlewares/upload";
import {
  downloadFile,
  getHome,
  showDownloadPage,
  uploadFile,
} from "../controllers/fileController";

const router = express.Router();

router.get("/", getHome);
router.post("/upload", upload.single("file"), uploadFile);
router.get("/file/:id", showDownloadPage);
router.post("/file/:id", downloadFile);

export default router;
