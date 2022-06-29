const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().not().empty().required(),
  password: Joi.string().not().empty().required(),
});