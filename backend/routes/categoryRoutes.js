import { Router } from "express";
import {
  findCategory,
  findSingleCategory,
  createCategory,
} from "../controller/categoryController.js";
import multer from "multer";
import path from "path";

const router = Router();
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/all", findCategory);
router.get("/all/:id", findSingleCategory);
router.post("/create", upload.single("image"), createCategory);
