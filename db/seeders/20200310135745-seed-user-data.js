'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'demouser1',
        hashedPassword: bcrypt.hashSync('1!aA', 10),
        email: 'demo1@gmail.com',
        phone: '123-555-1231',
        firstName: 'Demo',
        lastName: 'User1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demouser2',
        hashedPassword: bcrypt.hashSync('2!aA', 10),
        email: 'demo2@gmail.com',
        phone: '123-555-1232',
        firstName: 'Demo',
        lastName: 'User2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demouser3',
        hashedPassword: bcrypt.hashSync('3!aA', 10),
        email: 'demo3@gmail.com',
        phone: '123-555-1233',
        firstName: 'Demo',
        lastName: 'User3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demouser4',
        hashedPassword: bcrypt.hashSync('4!aA', 10),
        email: 'demo4@gmail.com',
        phone: '123-555-1234',
        firstName: 'Demo',
        lastName: 'User4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
