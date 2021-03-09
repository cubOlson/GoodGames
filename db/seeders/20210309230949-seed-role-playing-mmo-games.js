'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      {
        title: "Black Desert Online",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Elite Dangerous",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Guild Wars 2",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rune Scape",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Destiny 2",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Destiny",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fallout 76",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Elder Scrolls Online",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Defiance",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Blade and Soul",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rift",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Trove",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tera",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "World of Warcraft",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pokemon Go",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Planet Side 2",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Star Wars: The Old Republic",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final Fantasy 14",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Club Penguin",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "NeverWinter",
        image:
          "",
        likesCount: 0,
        releaseDate: "",
        developer: "",
        summary:
          "",
        purchase:
          "",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], { });
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Games', null, {});
}
};
