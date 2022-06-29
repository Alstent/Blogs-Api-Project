const ApiErrors = require('../errors/ApiErrors');
const loginSchema = require('../schemas/loginSchema');

module.exports = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    const { details: [{ message }] } = error;
    next(ApiErrors.badRequest(message));
  }
  next();
};