const express = require("express");
const router = express.Router();
const { loginUser, logoutUser} = require("../auth");
const { User, UserGame, Game, Review } = require("../db/models/");
const {  asyncHandler,  csrfProtection,  bcrypt,  check,  validationResult,  loginValidation,  registerValidation, sanityCheck } = require("./utils");

/* GET */
// Load user login page
router.get("/login", csrfProtection, asyncHandler(async (req, res) => {
    res.render("user-login", { csrfToken: req.csrfToken(), title: "Login" });
  }));

// Load user registration sign up page
router.get( "/signup", csrfProtection, asyncHandler(async (req, res) => {
    res.render("user-signup", { csrfToken: req.csrfToken(), title: "Sign Up" });
}));

// Load the user's library
router.get("/mygames", csrfProtection, asyncHandler(async (req, res) => {
  const { userId } = req.session.auth
  const user = await User.findByPk(userId, { include: Game })
  const myGames = user.Games
  const records = await UserGame.findAll( {where: { userId }})
  const gameStatuses = {};
  records.forEach( record => {
      const { gameId, userId, status, reviewed } = record;
      gameStatuses[gameId] = status // add key/value to gameStatuses obj for mixin
    })
  res.render('my-games', {user, myGames, title: 'My Games', csrfToken: req.csrfToken(), gameStatuses})
}))

// Load a list of the users reviewed games
router.get("/myreviews", csrfProtection, asyncHandler(async (req, res) => {
  const { userId } = req.session.auth
  const user = await User.findByPk(userId, { include: Game })
  const myReviews = await Review.findAll({where: {userId}, include: Game })
  const reviewedGames = myReviews.map( review => review.Game)

  const records = await UserGame.findAll( {where: { userId }})
  const gameStatuses = {};
  records.forEach( record => {
      const { gameId, userId, status, reviewed } = record;
      gameStatuses[gameId] = status // add key/value to gameStatuses obj for mixin
    })
  res.render('my-reviews', {user, reviewedGames, title: 'My Reviewed Games', csrfToken: req.csrfToken(), gameStatuses})
}))

// Load users profile settings page
router.get('/myprofile', csrfProtection, asyncHandler(async(req, res, next) => {
  const { userId } = req.session.auth
  const user = await User.findByPk(userId);
  res.render('my-profile', { user, title: 'My Profile', csrfToken: req.csrfToken()})
  }))


/* POST */
// Register new user
router.post("/signup", csrfProtection, registerValidation, asyncHandler(async (req, res) => {
    const { username, firstName, lastName, phone, email, password } = req.body;
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      const user = await User.build({ username, firstName, lastName, phone, email });
      let hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      return loginUser(req, res, user);
    } else {
      const errors = validationErrors.array().map((error) => error.msg);
      res.render("user-signup", { errors, csrfToken: req.csrfToken(), title: "Login"});
    }
  }));

// Login user
router.post("/login", csrfProtection, loginValidation, asyncHandler( async(req, res) => {
    const { email, password } = req.body;
    const loginErrors = validationResult(req);
    let errors = [];

    if (loginErrors.isEmpty()) {
        const user = await User.findOne({ where: { email } });

        if (user) {
          const passwordMatch = await bcrypt.compare( password, user.hashedPassword.toString());

          if (passwordMatch) {
            return loginUser(req, res, user);
          } else {
            errors.push(`Username or password does not match. Please try again.`)
            res.render("user-login", { errors, title: "Login", csrfToken: req.csrfToken() });
        }
        } else {
          errors.push(`Username or password does not match. Please try again.`)
          res.render("user-login", { errors, title: "Login", csrfToken: req.csrfToken() });
        }
    } else {
        errors = loginErrors.array().map((error) => error.msg);
        res.render("user-login", { errors, title: "Login", csrfToken: req.csrfToken() });
    }
}));

// Add game to User Library
router.post('/mygames', csrfProtection, asyncHandler(async(req, res) => {
    const { status, gameId } = req.body
    const { userId } = req.session.auth
    const findGame = await UserGame.findOne({where: {userId, gameId}})
    if(findGame){
        findGame.status = status
        await findGame.save()
    } else {
      await UserGame.create({gameId, userId, status, reviewed: false });
    }
}))

// Update user profile info
router.post('/myprofile', csrfProtection, registerValidation, asyncHandler( async(req, res) => {
  const { userId } = req.session.auth
  const { firstName, lastName, username, phone, email, password } = req.body
  const user = await User.findByPk(userId);

  const validationErrors = validationResult(req);
  if(validationErrors.isEmpty()){
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.phone = phone;
    user.email = email;
    user.hashedPassword = await bcrypt.hash(password, 10);
    await user.save();
    res.render(`my-profile`, { title: 'My Profile', csrfToken: req.csrfToken(), user, message: 'Setting updated successfully!'})
  } else {
    const errors = validationErrors.array().map(error => error.msg);
    res.render('my-profile', {errors, title: 'My Profile', csrfToken: req.csrfToken(), user});
  }
}));

/* DELETE */
// Delete user profile
router.post(`/delete`, csrfProtection, asyncHandler( async(req, res) => {
  const { userId } = req.session.auth
  const user = await User.findByPk(userId)
  delete req.session.auth;
  await user.destroy()
  res.redirect('/')
}))

// Logout user
router.post("/logout", async (req, res) => {
  return logoutUser(req, res);
});

// Delete game from user library
router.post(`/mygames/delete`, sanityCheck, asyncHandler( async(req, res) => {
  const { gameId } = req.body
  const { userId } = req.session.auth
  const record = await UserGame.findOne({where: { userId, gameId }})
  await record.destroy()
  res.status(200)
  res.send()
}))

module.exports = router;
