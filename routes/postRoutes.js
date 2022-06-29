const express = require('express');

const validateToken = require('../auth/validateToken');
const postController = require('../controllers/postController');
const postValidation = require('../middlewares/postValidation');
const updatePostValidation = require('../middlewares/updatePostValidation');

const router = express.Router();

router.post('/', validateToken, postValidation, postController.createPost);
router.get('/search', validateToken, postController.getPostByQuery);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, updatePostValidation, postController.updatePost);
router.delete('/:id', validateToken, postController.deletePost);

module.exports = router;