const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { title, content, categoryIds } = req.body;
    const post = await postService.createPost({ title, content, userId }, categoryIds);

    return res.status(201).json({ ...post });
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (_req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    return res.status(200).json({ ...posts });
  } catch (err) {
    next(err);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);

    return res.status(200).json({ ...post });
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const post = await postService.updatePost(id, req.body, userId);

    return res.status(200).json({ ...post });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    await postService.deletePost(id, userId);

    return res.status(204).json();
  } catch (err) {
    next(err);
  }
};

const getPostByQuery = async (req, res, next) => {
  try {
    const query = req.query.q || null;
    const post = await postService.getPostByQuery(query);

    return res.status(200).json([...post]);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};
