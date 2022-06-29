const ApiErrors = require('../errors/ApiErrors');
const updatePostSchema = require('../schemas/updatePostSchema');

module.exports = (req, _res, next) => {
  const { error } = updatePostSchema.validate(req.body);

  if (error) {
    const { details: [{ message }] } = error;
    next(ApiErrors.badRequest(message));
  }
  next();
};