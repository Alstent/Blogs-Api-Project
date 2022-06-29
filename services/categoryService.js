const { Category } = require('../models');

const createCategory = async (category) => {
  const { dataValues } = await Category.create(category);

  return dataValues;
};

const getAllCategories = () => Category.findAll({ raw: true });

module.exports = {
  createCategory,
  getAllCategories,
};
