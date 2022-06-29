const express = require('express');

const validateToken = require('../auth/validateToken');
const categoryController = require('../controllers/categoryController');
const categoryValidation = require('../middlewares/categoryValidation');

const router = express.Router();

router.post('/', validateToken, categoryValidation, categoryController.createCategory);
router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;