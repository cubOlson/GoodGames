var express = require('express');
var router = express.Router();
const { Game, User } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // It's this query that would decide what we see.
  const games = await Game.findAll()
console.log(games);
  if(req.session.auth) {
    const { userId } = req.session.auth
    const user = await User.findByPk(userId);
    return res.render("index", {
      title: "GoodGames - The #1 App Academy Game Project Database",
      user,
      games: games,
    });
  }
  // Need to fetch all games that we want to render. The way this query is structured, is how we get our data. 
  // Let's create a card for every game in our database.... needs to be before render
  // games will now be an array of game objects (each element in array will be a game object)
  res.render('index', {
    title: 'GoodGames - The #1 App Academy Game Project Database',
    games: games, 
  })
}));

module.exports = router;
