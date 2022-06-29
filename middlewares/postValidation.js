const ApiErrors = require('../errors/ApiErrors');
const postSchema = require('../schemas/postSchema');

module.exports = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) {
    const { details: [{ message }] } = error;
    next(ApiErrors.badRequest(message));
  }
  next();
};