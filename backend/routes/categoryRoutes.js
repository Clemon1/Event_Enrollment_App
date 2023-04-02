import { Router } from "express";
import {
  findLimitCategory,
  findCategory,
  noOfEvent,
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
router.get("/limit", findLimitCategory);
router.get("/events", noOfEvent);
router.get("/all", findCategory);
router.get("/all/:id", findSingleCategory);
router.post("/create", upload.single("image"), createCategory);

export default router;
