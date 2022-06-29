const express = require('express');

const validateToken = require('../auth/validateToken');
const usersController = require('../controllers/usersController');
const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', userValidation, usersController.createUser);
router.get('/', validateToken, usersController.getAllUsers);
router.get('/:id', validateToken, usersController.getUserById);
router.delete('/me', validateToken, usersController.deleteMe);

module.exports = router;