'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Platforms', [
     {platform: 'PC', createdAt: new Date()},
     {platform: 'Playstation 4', createdAt: new Date()},
     {platform: 'Playstation 5', createdAt: new Date()},
     {platform: 'Xbox One', createdAt: new Date()},
     {platform: 'Xbox Series X', createdAt: new Date()},
     {platform: 'Switch', createdAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Platforms', null, {});
  }
};
