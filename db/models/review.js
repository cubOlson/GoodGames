'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    title: {
      allowNull: false,
      type: Sequelize.STRING(150)
    },
    content: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    liked: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
  }, {});
  Review.associate = function(models) {
    //One:Many Game <> Review
    Review.belongsTo(models.Game, {foreignKey: 'gameId'})

    //One:Many Game <> User
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};