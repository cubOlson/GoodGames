'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGame = sequelize.define('UserGame', {
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
    status: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    reviewed: {
      allowNull: false,
      default: false, 
      type: Sequelize.BOOLEAN
    },
  }, {});
  UserGame.associate = function(models) {
    
  };
  return UserGame;
};