'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        allowNull: false,
        references: {model: 'Games'},
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        references: {model: 'Users'},
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        default: 'Not Played',
        type: Sequelize.STRING(50)
      },
      reviewed: {
        allowNull: false,
        default: false, 
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('UserGames');
  }
};