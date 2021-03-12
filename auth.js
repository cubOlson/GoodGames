const db = require('./db/models');

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id }
    res.locals.user = true;
    req.session.save(() => { res.redirect('/') })
}

const logoutUser = (req, res) => {
    delete req.session.auth;
    res.locals.user = false;
    req.session.save( () => { res.redirect('/') })
}

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) return res.redirect('/users/login')
    return next()
}

const requireAuthorized = (req, res, next) => {
    const { userId } = req.session.auth // identifies which user is logged in
    const path = res.locals.path
    const pathId = parseInt(path.split('/')[2], 10)
    if(userId === pathId){
        next()
    } else {
        res.redirect('/users/login')
    }
}

const restoreUser = async(req, res, next) => {
    console.log(req.session);
        if (req.session.auth) {
            const { userId } = req.session.auth;
            try {
                const user = await db.User.findByPk(userId);
                if (user) {
                    res.locals.authenticated = true;
                    res.locals.user = user;
                    res.locals.userId = user.id
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
    requireAuthorized
};
