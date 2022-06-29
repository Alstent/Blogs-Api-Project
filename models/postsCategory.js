module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
  { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER }, { timestamps: false });
  
  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost', 
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};