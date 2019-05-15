module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    categoryTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

   User.associate = (models) => {
    

    Category.belongsToMany(models.Post, {
      through: 'CategoryPost',
    });
  };

  return Category;
};