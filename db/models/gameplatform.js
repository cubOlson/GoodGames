'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamePlatform = sequelize.define('GamePlatform', {
    gameId: {
        allowNull: false,
        references: { model: 'Games'},
        type: Sequelize.INTEGER
      },
      platformId: {
        allowNull: false,
        references: { model: 'Platforms'},
        type: Sequelize.INTEGER
      },
  }, {});
  GamePlatform.associate = function(models) {

  };
  return GamePlatform;
};
