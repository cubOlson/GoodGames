const express = require('express')
const router = express.Router()
const { asyncHandler, sanityCheck, csrfProtection } = require('./utils')
const { Game, Category, User, Review } = require('../db/models')

/* GET */
router.get('/:id', csrfProtection, asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  const game = await Game.findByPk(gameId, {include: Category})
  const reviews = await Review.findAll({where: {gameId}, limit:10})

  res.render('game-page', { title: `${game.title}`, game, reviews, csrfToken: req.csrfToken() })
}));



router.post('/:id/review', csrfProtection, asyncHandler(async (req, res) => {
  const { title, content, liked} = req.body
  const gameId = parseInt(req.params.id, 10)

  const newReview = await Review.create({
    gameId, 
    userId: req.session.auth,
    title,
    content,
    liked: liked
  })

  res.redirect(`http://localhost:8080/games/${gameId}`)
}))

module.exports = router
