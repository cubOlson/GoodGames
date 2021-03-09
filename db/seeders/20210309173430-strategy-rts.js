'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Games",
      [
        //{title, image, likesCount, releaseDate, developer, summary, purchase, categoryId}
        {
          title: "Dark Souls Remastered",
          image:
            "https://www.mobygames.com/images/covers/l/483065-dark-souls-remastered-xbox-one-front-cover.jpg",
          likesCount: 0,
          releaseDate: "May 23, 2018",
          developer: "From Software",
          summary:
            "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
          purchase:
            "https://www.amazon.com/dp/B0792K3ZH3/ref=sr_1_3?crid=1PFEOFE2XP6S2&dchild=1&keywords=dark+souls+remastered&qid=1615312392&s=videogames&sprefix=dark+souls+rema%2Cvideogames%2C442&sr=1-3",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Counter-Strike: Global Offensive",
          image:
            "https://www.mobygames.com/images/covers/s/501538-counter-strike-global-offensive-playstation-3-front-cover.jpg",
          likesCount: 0,
          releaseDate: "August 21, 2012",
          developer: "Valve, Hidden Path Entertainment",
          summary:
            "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS conten",
          purchase:
            "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          image:
            "",
          likesCount: 0,
          releaseDate: "",
          developer: "",
          summary:
            "",
          purchase:
            "",
          categoryId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
