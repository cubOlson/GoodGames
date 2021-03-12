const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models/');
const { requireAuth } = require('../auth');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/:search', requireAuth, asyncHandler(async (req, res) => {
    const searching = await db.Game.findAll({
        where: {
            [Op.or]: {
                title : {
                    [Op.iLike]: `%${req.params.search}%`,
                },
            },
        },
    });
    res.render('search', {searching});
}))

module.exports = router;
