const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models/');
const { requireAuth } = require('../auth');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/:search', csrfProtection, asyncHandler(async (req, res) => {

    const searching = await db.Game.findAll({
        where: {
            [Op.or]: {
                title : {
                    [Op.iLike]: `%${req.params.search}%`,
                },
            },
        },
    });
    const gameStatuses = {};
    if(req.session.auth){
        const { userId } = req.session.auth
        const records = await db.UserGame.findAll( {where: { userId }})
        records.forEach( record => {
            const { gameId, userId, status, reviewed } = record;
            gameStatuses[gameId] = status // add key/value to gameStatuses obj for mixin
        })
        res.render('search', {searching, gameStatuses, csrfToken: req.csrfToken()});
    } else {
        res.render('search', {searching, gameStatuses, csrfToken: req.csrfToken()});
    }
}))

module.exports = router;
