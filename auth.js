const db = require('./db/models');

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id }
    res.locals.user = true;
    res.locals.userId = user.id
    req.session.save(() => { res.redirect('/') })
}

const logoutUser = (req, res) => {
    delete req.session.auth;
    res.locals.user = false;
    res.locals.userId = -1
    req.session.save( () => { res.redirect('/') })
}

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) return res.redirect('/users/login')
    return next()
}

const restoreUser = async(req, res, next) => {
        if (req.session.auth) {
            const { userId } = req.session.auth;
            try {
                const user = await db.User.findByPk(userId);
                if (user) {
                    res.locals.authenticated = true;
                    res.locals.user = user;
                    res.locals.path = req.path
                    next();
                }
            }
            catch (err) {
                res.locals.authenticated = false;
                next(err);
            }
        } else {
            res.locals.authenticated = false;
            next();
        }
};

module.exports = {
    loginUser,
    logoutUser,
    requireAuth,
    restoreUser,
};
