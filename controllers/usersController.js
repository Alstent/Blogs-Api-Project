const userService = require('../services/usersService');

const createUser = async (req, res, next) => {
  try {
    const token = await userService.createUser(req.body);

    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({ ...users });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    return res.status(200).json({ ...user });
  } catch (err) {
    next(err);
  }
};

const deleteMe = async (req, res, next) => {
  try {
    const userId = req.user.id;
    await userService.deleteMe(userId);

    return res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
};
