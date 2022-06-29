const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');
const ApiErrors = require('../errors/ApiErrors');

const jwtConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

const signIn = async (user) => {
  const existingUser = await User.findOne({ where: { email: user.email }, raw: true });

  if (!existingUser) throw ApiErrors.badRequest('Invalid fields');

  return jwt.sign({ ...existingUser }, process.env.JWT_SECRET, jwtConfig);
};

module.exports = {
  signIn,
};
