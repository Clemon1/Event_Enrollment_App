import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "events",
    },
  },
  {
    timestamps: true,
  },
);

const booking = mongoose.model("bookings", bookingSchema);

export default booking;
