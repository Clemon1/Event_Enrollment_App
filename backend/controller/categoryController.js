import category from "../models/categoriesModel.js";
import cloudinary from "../util/cloudinary.js";
import events from "../models/eventModel.js";

// Limit Category
export const findLimitCategory = async (req, res) => {
  try {
    const limitCategories = await category.find().limit(6);
    res.status(200).json(limitCategories);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// No of event in categories

export const noOfEvent = async (req, res) => {
  try {
    const categories = await category.aggregate([
      // {
      //   $group: { _id: "$category", count: { $sum: 1 } },
      // },
      {
        $lookup: {
          from: "events",
          localField: "_id",
          foreignField: "category",
          as: "events",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          eventCount: { $size: "$events" },
        },
      },
    ]);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Find All category

export const findCategory = async (req, res) => {
  try {
    const allCategories = await category.find();
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Find Single Category
export const findSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const singleCategory = await category.findById(id);
    const eventUnderCategory = await events.find({
      category: id,
    });
    res.status(200).json({ singleCategory, eventUnderCategory });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// checking no of events
export const checkNumberEvent = async (req, res) => {};

// Create Category
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "categories",
    });

    const newCat = new category({
      name,
      image: imageUpload.url,
    });
    const newCategory = await newCat.save();
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
