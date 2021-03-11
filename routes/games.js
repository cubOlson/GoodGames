const express = require('express')
const router = express.Router()
const { asyncHandler, sanityCheck } = require('./utils')
const { Game, Category } = require('../db/models')

/* GET */
router.get('/:id', asyncHandler( async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  console.log(gameId)
  const game = await Game.findByPk(gameId, {include: Category})
  console.log(game)
  res.render('game-page', { title: `${game.title}`, game })
}));




module.exports = router
