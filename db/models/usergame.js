'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGame = sequelize.define('UserGame', {
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
    status: {
      allowNull: false,
      default: 'Not Played',
      type: DataTypes.STRING(50)
    },
    reviewed: {
      allowNull: false,
      default: false,
      type: DataTypes.BOOLEAN
    },
  }, {});
  UserGame.associate = function(models) {
    
  };
  return UserGame;
};
