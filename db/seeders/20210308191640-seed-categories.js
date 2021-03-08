'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Categories', [
     {category: 'Action & Adventure', createdAt: new Date(), updatedAt: new Date()},
     {category: 'Role Playing & MMO', createdAt: new Date(), updatedAt: new Date()},
     {category: 'Strategy & RTS', createdAt: new Date(), updatedAt: new Date()},
     {category: 'Sports & Racing', createdAt: new Date(), updatedAt: new Date()},
     {category: 'Casual & Simulation', createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Categories', null, {});
  }
};
