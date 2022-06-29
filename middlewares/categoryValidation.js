const ApiErrors = require('../errors/ApiErrors');
const categorySchema = require('../schemas/categorySchema');

module.exports = (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    const { details: [{ message }] } = error;
    next(ApiErrors.badRequest(message));
  }
  next();
};