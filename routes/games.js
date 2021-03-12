const express = require('express')
const router = express.Router()
const { asyncHandler, sanityCheck, csrfProtection } = require('./utils')
const { Game, Category, User, Review, UserGame } = require('../db/models')

/* GET */
router.get('/:id', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth
  const game = await Game.findByPk(gameId, {include: Category})
  const gameReviews = await Review.findAll({where: {gameId}, limit:10})
  if (userId) {
    const user = await User.findByPk(userId, {include: [Game, Review]})
    const userReviewed = user.Games.find(game => game.id === gameId).UserGame.dataValues.reviewed
    const playedStatus = user.Games.find(game => game.id === gameId).UserGame.dataValues.status
    console.log(playedStatus)
    if (userReviewed) {
      const userReview = await Review.findOne({where: userId})
      return res.render('game-page', { title: `${game.title}`, game, gameReviews, userReview, playedStatus, csrfToken: req.csrfToken()})
    }
  }
  
  res.render('game-page', { title: `${game.title}`, game, gameReviews, csrfToken: req.csrfToken()})
}));

/* Post */
router.post('/:id/review', csrfProtection, asyncHandler(async (req, res) => {
  const { title, content, likedStatus } = req.body
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth

  await Review.create({
    gameId, 
    userId,
    title,
    content,
    liked: likedStatus === 'liked' ? true : false
  })

  await userGameStatus[0].save()
  res.redirect(`http://localhost:8080/games/${gameId}`)
}))

module.exports = router
