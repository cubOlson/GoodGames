'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(150)
      },
      phone: {
        type: Sequelize.STRING(50)
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
  }, {});
  User.associate = function(models) {
    //Many:Many User <> Game (library)
      const columnMapping2 = {
      through: 'UserGame',
      otherKey: 'gameId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Game, columnMapping2)

    //One:Many User <> Review
    User.hasMany(models.Review, {foreignKey: 'userId'})
  };
  return User;
};
