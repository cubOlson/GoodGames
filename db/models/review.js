'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    gameId: {
      allowNull: false,
      references: {model: 'Games'},
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      references: {model: 'Users'},
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(150)
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    liked: {
      allowNull: false,
      type: DataTypes.BOOLEAN
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
