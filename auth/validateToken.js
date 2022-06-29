const jwt = require('jsonwebtoken');
require('dotenv').config();

const ApiErrors = require('../errors/ApiErrors');

const jwtConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

module.exports = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) next(ApiErrors.unauthorized('Token not found'));
    req.user = jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
    next();
  } catch (err) {
    next(ApiErrors.unauthorized('Expired or invalid token'));
  }
};
