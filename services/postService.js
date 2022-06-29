const { BlogPost, Category, User, PostsCategories } = require('../models');
const ApiErrors = require('../errors/ApiErrors');

const createPost = async (post, categoryIds) => {
  // deve ter uma forma melhor de fazer isso ...
  const ids = await Category.findAll({ raw: true, attributes: { exclude: ['name'] } });
  const idsArray = [];

  ids.forEach(({ id }) => {
    idsArray.push(id);
  });

  categoryIds.forEach((id) => {
    if (!idsArray.includes(id)) {
      throw ApiErrors.badRequest('"categoryIds" not found');
    }
  });

  const { dataValues } = await BlogPost.create(post);
  const { id: postId } = dataValues;

  categoryIds.forEach(async (categoryId) => {
    await PostsCategories.create({ postId, categoryId });
  });

  return dataValues;
};

const getAllPosts = () => BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ] });
  if (!post) throw ApiErrors.notFound('Post does not exist');

  const { dataValues } = post;
    return dataValues;
};

const updatePost = async (postId, newPost, currentUserId) => {
  const post = await BlogPost.findOne({ where: { id: postId } });

  if (post.id !== currentUserId) {
    throw ApiErrors.unauthorized('Unauthorized user');
  }

  await BlogPost.update(newPost, { where: { id: postId } });

  const { dataValues } = await BlogPost.findOne({
    where: { id: postId },
    include: [{ 
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
    attributes: { exclude: ['published', 'updated', 'id'] },
  });
  return dataValues;
};

const deletePost = async (postId, currentUserId) => {
  await getPostById(postId);

  const post = await BlogPost.findOne({ where: { id: postId } });

  if (post.id !== currentUserId) {
    throw ApiErrors.unauthorized('Unauthorized user');
  }

  await BlogPost.destroy({ where: { id: postId } });
};

const getPostByQuery = async (query) => {
  const allPosts = await getAllPosts();
  
  if (!query) return allPosts;

  const searchResult = allPosts
  .filter((posts) => posts.title.includes(query) || posts.content.includes(query));
  
  return searchResult;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};
