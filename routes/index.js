var express = require('express');
var router = express.Router();
const { Game, User, UserGame, Category } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  const games = await Game.findAll({include: [Category, User]})
  const actionGames = games.filter(game => game.Category.category === 'Action & Adventure');
  const strategyGames = games.filter(game => game.Category.category === 'Strategy & RTS');
  const casualGames = games.filter(game => game.Category.category === 'Casual & Simulation');
  const sportsGames = games.filter(game => game.Category.category === 'Sports & Racing');
  const mmoGames = games.filter(game => game.Category.category === 'Role Playing & MMO');
  const popularGames = await Game.findAll({ order: [['likesCount','DESC']], limit: 4 })

  const gameStatuses = {};

  if(req.session.auth) {
    const { userId } = req.session.auth
    user = await User.findByPk(userId);
    const records = await UserGame.findAll( {where: { userId }})
    records.forEach( record => {
      const { gameId, userId, status, reviewed } = record;
      gameStatuses[gameId] = status // add key/value to gameStatuses obj for mixin
    })
    console.log('GAME STATUSES:', gameStatuses)
    return res.render("index", {
      title: "GoodGames - The #1 App Academy Game Project Database", user, games, actionGames, strategyGames, casualGames, sportsGames, mmoGames, popularGames, gameStatuses, csrfToken: req.csrfToken()});
  } else {
  res.render('index', {
    title: 'GoodGames - The #1 App Academy Game Project Database', games, actionGames, strategyGames, casualGames, sportsGames, mmoGames, popularGames, gameStatuses, csrfToken: req.csrfToken()})
  }
}));

router.post('/', (req, res) => {
  console.log(req.body);
  const { search } = req.body;
  res.redirect(`/search/${search}`);
});

module.exports = router;
