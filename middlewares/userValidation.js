const ApiErrors = require('../errors/ApiErrors');
const userSchema = require('../schemas/userSchema');

module.exports = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    const { details: [{ message }] } = error;
    next(ApiErrors.badRequest(message));
  }
  next();
};