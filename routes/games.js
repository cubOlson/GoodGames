const express = require('express')
const router = express.Router()
const { validationResult, asyncHandler, sanityCheck, csrfProtection, reviewValidation } = require('./utils')
const { Game, Category, User, Review, UserGame } = require('../db/models')
const { Op } = require('sequelize');

/* GET */
router.get('/:id', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const game = await Game.findByPk(gameId, {include: Category})
  let gameReviews = await Review.findAll({where: {gameId}, limit:10, order: [['updatedAt', 'DESC']]})
  
  if (req.session.auth) {
    const { userId } = req.session.auth
    const user = await User.findByPk(userId)
    return res.render('game-page', { title: `${game.title}`, game, user, gameReviews, csrfToken: req.csrfToken()})
  }

  res.render('game-page', { title: `${game.title}`, game, gameReviews, csrfToken: req.csrfToken()})
}));

router.get('/:id/review', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth
  const game = await Game.findByPk(gameId, {include: Category})

  await UserGame.create({gameId, userId, status: 'Played', reviewed: false })
  res.render('review-page', { game, csrfToken: req.csrfToken() })
}))

router.get('/:id/review/:reviewId', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const game = await Game.findByPk(gameId, {include: Category})
  const reviewId = parseInt(req.params.reviewId, 10)
  const review = await Review.findOne({where: {id: reviewId}})
  console.log(review.dataValues.content)

  res.render('edit-review', {review, game, csrfToken: req.csrfToken() })
}))

/* Post */
router.post('/:id/review', csrfProtection, reviewValidation, asyncHandler(async (req, res) => {
  const { title, content, likedStatus } = req.body
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth
  const validationErrors = validationResult(req)
  const game = await Game.findByPk(gameId)

  if (validationErrors.isEmpty()) {
    await Review.create({
      gameId,
      userId,
      title,
      content,
      liked: likedStatus === 'liked' ? true : false
    })
  
    const record = await UserGame.findOne({where: {userId, gameId}})
    if (record) {
      record.reviewed = true
      await record.save()
    } else {
      const newRecord = await UserGame.create({
        gameId,
        userId,
        status: 'Played',
        reviewed: true
      })
    }
    res.redirect(`/games/${gameId}`)

  } else {
    const errors = validationErrors.array().map( error => error.msg)
    res.render('review-page', { game, errors, csrfToken: req.csrfToken() })
  }
}))


/* PUT */
router.put('/:id/review/:reviewId', csrfProtection, reviewValidation, asyncHandler(async (req, res) => {
  const { title, content, likedStatus } = req.body
  const gameId = parseInt(req.params.id, 10)
  const { userId } = req.session.auth
  const validationErrors = validationResult(req)
  const game = await Game.findByPk(gameId)

  if (validationErrors.isEmpty()) {
    await Review.update({
      gameId,
      userId,
      title,
      content,
      liked: likedStatus === 'liked' ? true : false
    })
    res.redirect(`/games/${gameId}`)
    
  } else {
    const errors = validationErrors.array().map( error => error.msg)
    res.render('review-page', { game, errors, csrfToken: req.csrfToken() })
  }
}))

/* DELETE */
router.delete(`/:gameId/delete/:reviewId`, sanityCheck, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.reviewId, 10)
  const review = await Review.findOne({where: {id: reviewId}})
  await review.destroy()
  res.status(200)
  res.send()
}))

module.exports = router
