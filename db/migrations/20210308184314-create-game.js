'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        type: Sequelize.STRING(50)
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
