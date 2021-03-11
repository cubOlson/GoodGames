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
router.get("/:id/mygames", asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  const user = await User.findByPk(userId, { include: Game })
  const myGames = user.Games
  res.render('my-games', {user, myGames, title: 'My Games'})
}))

// Load a list of the users reviewed games
router.get("/:id/myreviews", asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  const user = await User.findByPk(userId, { include: Game })
  const myGames = user.Games.filter(game => game.UserGame.reviewed === true)
  res.render('my-games', {user, myGames, title: 'My Reviewed Games'})
}))

router.get('/:id/myprofile', asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await User.findByPk(userId);
  res.render('my-profile', { user, title: 'My Profile' })
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

/* PUT */
// router.put('/signup', asyncHandler( async( (req, res) => {
//   const { userId } = req.session.auth
//   const { firstName, lastName, username, phone, email, password } = req.body
//   const user = await User.findByPk(userId)
  
// })))

//Logout user
router.post("/logout", async (req, res) => {
  return logoutUser(req, res);
});

module.exports = router;
