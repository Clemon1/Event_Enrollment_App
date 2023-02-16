import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    dateOfEvent: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const events = mongoose.model("events", eventSchema);

export default events;
