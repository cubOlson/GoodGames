const express = require("express");
const router = express.Router();
const { loginUser, logoutUser } = require("../auth");
const { User, UserGame, Game } = require("../db/models/");
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
router.get("/:id/mygames", csrfProtection, asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  const user = await User.findByPk(userId, { include: Game })
  const myGames = user.Games
  res.render('my-games', {user, myGames, title: 'My Games', csrfToken: req.csrfToken()})
}))

// Load a list of the users reviewed games
router.get("/:id/myreviews", csrfProtection, asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  const user = await User.findByPk(userId, { include: Game })
  const myGames = user.Games.filter(game => game.UserGame.reviewed === true)
  res.render('my-games', {user, myGames, title: 'My Reviewed Games', csrfToken: req.csrfToken()})
}))

router.get('/:id/myprofile', csrfProtection, asyncHandler(async(req, res, next) => {
  const pathId = parseInt(req.params.id, 10);
  const { userId } = req.session.auth
  if( pathId !== userId){
    res.redirect('/')
  } else {
    const user = await User.findByPk(pathId);
    res.render('my-profile', { user, title: 'My Profile', csrfToken: req.csrfToken()})
  }
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

// Add Game to User Library
router.post('/:id/mygames', csrfProtection, asyncHandler(async(req, res) => {
    const { status, gameId } = req.body
    console.log(`=================`)
    console.log(`HERE IS THE STATUS`, status)
    console.log(`HERE IS THE GAME ID`, gameId)
    console.log(`=================`)
    if(req.session.auth){
      const { userId } = req.session.auth
      await UserGame.create({gameId, userId, status, reviewed: false })
      res.redirect(`/users/${userId}/mygames`)
    } else {
      res.redirect('/users/login')
    }
}))






router.post('/:id/myprofile', sanityCheck, csrfProtection, registerValidation, asyncHandler( async(req, res) => {
  const { userId } = req.session.auth
  console.log('THIS IS MY USER ID:', userId);
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
    // res.redirect(`/users/${userId}/myprofile`)
    res.redirect(`/`)
  } else {
    const errors = validationErrors.array().map(error => error.msg);
    res.render('my-profile', {errors, title: 'My Profile', csrfToken: req.csrfToken(), user});
  }
}));

/* DELETE */

router.post(`/:id/delete`, csrfProtection, asyncHandler( async(req, res) => {
  const userId = parseInt(req.params.id, 10)
  const user = await User.findByPk(userId)
  delete req.session.auth;
  await user.destroy()
  res.redirect('/')
}))

  //Logout user
router.post("/logout", async (req, res) => {
  return logoutUser(req, res);
});

module.exports = router;
