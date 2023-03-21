import { Router } from "express";
import {
  allBookings,
  userBookings,
  createBookings,
} from "../controller/bookingController.js";

const router = Router();

router.get("/allBooking", allBookings);

router.get("/userBooking/:id", userBookings);

router.post("/create", createBookings);

export default router;
