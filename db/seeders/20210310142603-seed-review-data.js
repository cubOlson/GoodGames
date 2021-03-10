'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {gameId:1, userId:1, title:"Wow, what a game!", content:`Seriously, this is one of the best games I've ever played. So worth the money!`, liked: true, createdAt: new Date(), updatedAt: new Date()},
      {gameId:1, userId:2, title:"Not bad, but would wait for sale", content:`After putting a solid weekend into the main story, I would say its overall pretty good. But if I were to do it again, I'd wait for a killer sale. Not worth buying at retail.`, liked: true, createdAt: new Date(), updatedAt: new Date()},
      {gameId:1, userId:3, title:"Awful", content:`Sucked. What more is there to say? The total play time for the main story line is only ten hours! What a waste of money. Didn't even last me a Saturday. Terrible voice acting. Bugs on bugs. I want my money back.`, liked: false, createdAt: new Date(), updatedAt: new Date()},
      {gameId:1, userId:4, title:"Meh", content:`Not great, not terrible.`, liked: true, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
