const express = require('express')
const router = express.Router()
const { asyncHandler, sanityCheck } = require('./utils')
const { Category, Game, User } = require('../db/models')


/* GET */
router.get('/:id', asyncHandler(async (req, res) => {
  const categoryId = parseInt(req.params.id, 10)
  const category = await Category.findByPk(categoryId)
  const games = await Game.findAll({where: {categoryId}})
  res.render('category-page', { title: `${category.category}`, category, games })
}))




module.exports = router