'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserGames', [
      {
        gameId: 1,
        userId: 1,
        status: 'Played',
        reviewed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 2,
        userId: 1,
        status: 'Playing',
        reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 3,
        userId: 1,
        status: 'Want to Play',
        reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 1,
        userId: 2,
        status: 'Played',
        reviewed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 2,
        userId: 2,
        status: 'Playing',
        reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 3,
        userId: 2,
        status: 'Want to Play',
        reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserGames', null, {});
  }
};
