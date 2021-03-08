'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    platform: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
  }, {});
  Platform.associate = function(models) {
    // Many:Many Games <> Platform
    const columnMapping = {
      through: 'GamePlatform',
      otherKey: 'gameId',
      foreignKey: 'platformId'
    }
    Platform.belongsToMany(models.Game, columnMapping);
  };
  return Platform;
};
