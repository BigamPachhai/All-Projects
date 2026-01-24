import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db";
import fileRoutes from "./routes/fileRoutes.js";
dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__dirname);

const app = express();
//security
app.use(helmet());
//parse form bodies
app.use(express.urlencoded({ extended: true }));
//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Rate limiting basic
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 60,
  })
);

app.use("/", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port" + PORT));
