const loginService = require('../services/loginService');

const signIn = async (req, res, next) => {
  try {
    const token = await loginService.signIn(req.body);

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signIn,
};
