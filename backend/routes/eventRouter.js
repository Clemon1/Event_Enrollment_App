import { Router } from "express";
import {
  allEvents,
  searchEvent,
  singleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controller/eventController.js";

const router = Router();

router.get("/allEvent", allEvents);
router.get("/search/:search", searchEvent);
router.get("/allEvent/:id", singleEvent);
router.post("/create", createEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
