var express = require('express');
var router = express.Router();
const { Game, User } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  const user = await User.findByPk(userId);

  res.render('index', { title: 'a/A Express Skeleton Home', user });
}));

module.exports = router;
