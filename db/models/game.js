'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(150)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      likesCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      developer: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      summary: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      purchase: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      categoryId: {
        allowNull: false,
        references: { model: 'Categories' },
        type: Sequelize.INTEGER
      },
  }, {});
  Game.associate = function(models) {
    // 1:Many Games <> Category
    Game.belongsTo(models.Category, { foreignKey: 'categoryId'});

    // Many:Many Games <> Platform
    const columnMapping = {
      through: 'GamePlatform',
      otherKey: 'platformId',
      foreignKey: 'gameId'
    }
    Game.belongsToMany(models.Platform, columnMapping);
  };


  return Game;
};
