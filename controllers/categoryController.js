const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const category = await categoryService.createCategory(req.body);

    return res.status(201).json({ ...category });
  } catch (err) {
    next(err);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();

    return res.status(200).json({ ...categories });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
