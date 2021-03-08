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
    // associations can be defined here
  };
  return Platform;
};
