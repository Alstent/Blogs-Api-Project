const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().length(6).required(),
  image: Joi.not().required(),
});