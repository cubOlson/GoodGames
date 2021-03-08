'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamePlatform = sequelize.define('GamePlatform', {
    gameId: {
        allowNull: false,
        references: { model: 'Games'},
        type: DataTypes.INTEGER
      },
      platformId: {
        allowNull: false,
        references: { model: 'Platforms'},
        type: DataTypes.INTEGER
      },
  }, {});
  GamePlatform.associate = function(models) {

  };
  return GamePlatform;
};
