import { Router } from "express";
import path from "path";
import {
  allEvents,
  searchEvent,
  singleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controller/eventController.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});
router.get("/allEvent", allEvents);

router.get("/allEvent/:id", singleEvent);
router.get("/search/:title", searchEvent);
router.post("/create", upload.single("image"), createEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
