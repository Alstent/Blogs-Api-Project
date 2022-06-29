const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');
const ApiErrors = require('../errors/ApiErrors');

const jwtConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

const createUser = async (user) => {
  const existingUser = await User.findOne({ where: { email: user.email }, raw: true });

  if (existingUser) throw ApiErrors.conflict('User already registered');

  const { dataValues } = await User.create(user);

  return jwt.sign({ ...dataValues }, process.env.JWT_SECRET, jwtConfig);
};

const getAllUsers = () => User.findAll({ raw: true });

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, raw: true });

  if (!user) throw ApiErrors.notFound('User does not exist');

  return user;
};

const deleteMe = (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
};
