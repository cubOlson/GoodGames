const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection } = require('./utils')
const { Category, Game, UserGame } = require('../db/models')


/* GET */
router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
  const categoryId = parseInt(req.params.id, 10)
  const category = await Category.findByPk(categoryId)
  const games = await Game.findAll({where: {categoryId}})
  if(req.session.auth){
    const { userId } = req.session.auth
    const records = await UserGame.findAll( {where: { userId }})
    const gameStatuses = {};
    records.forEach( record => {
        const { gameId, userId, status, reviewed } = record;
        gameStatuses[gameId] = status // add key/value to gameStatuses obj for mixin
    })
    res.render('category-page', { title: `${category.category}`, category, games, gameStatuses, csrfToken: req.csrfToken() })
  } else {
    res.render('category-page', { title: `${category.category}`, category, games, csrfToken: req.csrfToken() })
  }
}))




module.exports = router