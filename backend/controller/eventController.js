import events from "../models/eventModel.js";
import cloudinary from "../util/cloudinary.js";

// get all events
export const allEvents = async (req, res) => {
  try {
    const findAllEvent = await events.find();
    res.status(200).json(findAllEvent);
  } catch (error) {
    res.status(500).json(err.message);
  }
};

// Search and Filter event
export const searchEvent = async (req, res) => {
  try {
    const searchParams = req.params.search;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    const search = await events.find({
      $or: [
        { title: { $regex: searchParams, $options: "i" } },
        { dateOfEvent: { $gte: new Date(startDate), $lts: new Date(endDate) } },
      ],
    });
    res.status(200).json(search);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//get single event
export const singleEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const findEvent = await events.findById({ id });
    res.status(200).json(findEvent);
  } catch (error) {
    res.status(500).json(err.message);
  }
};

// Create an event
export const createEvent = async (req, res) => {
  const { title, description, category, dateOfEvent } = req.body;
  const image = req.file.path;
  console.log(image);
  try {
    const cloudUpload = await cloudinary.uploader.upload(image);

    const newEvent = new events({
      title,
      description,
      category,
      dateOfEvent,
      image: cloudUpload.public_id,
    });
    console.log(newEvent);
    const lastestEvent = await newEvent.save();
    console.log(lastestEvent);
    res.status(200).json(lastestEvent);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// update an Event
export const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const modifiedEvent = events.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json(modifiedEvent);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete an Event
export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEvent = events.findByIdAndDelete(id);
    res.status(200).json("Event deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
