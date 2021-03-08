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
     {platform: 'Playstation 4', createdAt: new Date(), updatedAt: new Date()},
     {platform: 'Playstation 5', createdAt: new Date(), updatedAt: new Date()},
     {platform: 'Xbox One', createdAt: new Date(), updatedAt: new Date()},
     {platform: 'Xbox Series X', createdAt: new Date(), updatedAt: new Date()},
     {platform: 'Switch', createdAt: new Date(), updatedAt: new Date()},
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
