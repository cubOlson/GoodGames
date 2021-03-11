var express = require('express');
var router = express.Router();
const { Game, User, UserGame, Category } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const games = await Game.findAll({include: [Category, User]})
  const actionGames = games.filter(game => game.Category.category === 'Action & Adventure');
  const strategyGames = games.filter(game => game.Category.category === 'Strategy & RTS');
  const casualGames = games.filter(game => game.Category.category === 'Casual & Simulation');
  const sportsGames = games.filter(game => game.Category.category === 'Sports & Racing');
  const mmoGames = games.filter(game => game.Category.category === 'Role Playing & MMO');
  const popularGames = await Game.findAll({ order: [['likesCount','DESC']], limit: 4 })


  if(req.session.auth) {
    const { userId } = req.session.auth
    const user = await User.findByPk(userId);

    const gameStatuses = {};
    const myGames = games.forEach(game => {
      if(game.Users.find(user => user.id===1)){
        gameStatuses[game.title] = game.Users.find(user => user.id===1).UserGame.dataValues.status
      }});

    return res.render("index", {
      title: "GoodGames - The #1 App Academy Game Project Database",
      user, games, actionGames, strategyGames, casualGames, sportsGames, mmoGames, popularGames, gameStatuses });
  }

  res.render('index', {
    title: 'GoodGames - The #1 App Academy Game Project Database',
    games, actionGames, strategyGames, casualGames, sportsGames, mmoGames, popularGames, gameStatuses })
}));

module.exports = router;
