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
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
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
