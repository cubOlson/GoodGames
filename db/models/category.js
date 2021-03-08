'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50)
      },
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Game, { foreignKey: 'categoryId'});
  };
  return Category;
};
