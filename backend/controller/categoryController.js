import category from "../models/categoriesModel.js";
import cloudinary from "../util/cloudinary.js";

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
    const singleCategory = await category.findById({ id });
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Create Category
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "categories",
    });

    const newCat = new category({
      name,
      image: imageUpload.public_id,
    });
    const newCategory = await newCat.save();
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
