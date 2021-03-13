const express = require('express')
const router = express.Router()
const { asyncHandler, sanityCheck, csrfProtection, reviewValidation } = require('./utils')
const { Game, Category, User, Review, UserGame } = require('../db/models')

/* GET */
router.get('/:id', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const game = await Game.findByPk(gameId, {include: Category})
  const gameReviews = await Review.findAll({where: {gameId}, limit:10, order: [['updatedAt', 'DESC']]})

  res.render('game-page', { title: `${game.title}`, game, gameReviews, csrfToken: req.csrfToken()})
}));

router.get('/:id/review', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth
  const game = await Game.findByPk(gameId, {include: Category})
  const user = await User.findByPk(userId)

  await UserGame.create({gameId, userId, status: 'Played', reviewed: false })
  res.render('review-page', { game, csrfToken: req.csrfToken(), user })
}))

/* Post */
router.post('/:id/review', csrfProtection, reviewValidation, asyncHandler(async (req, res) => {
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

  const record = await UserGame.findOne({where: {userId, gameId}})
  record.reviewed = true
  await record.save()

  res.redirect(`/games/${gameId}`)
}))

module.exports = router
