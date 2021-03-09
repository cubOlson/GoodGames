const express = require("express");
const router = express.Router();
const { loginUser, logoutUser } = require('../auth')

const { User } = require('../db/models/');

const {
  asyncHandler,
  csrfProtection,
  bcrypt,
  check,
  validationResult,
} = require("./utils");

/* GET users listing. */
router.get("/login", csrfProtection, asyncHandler(async(req, res, next) => {
    res.render("user-login", { csrfToken: req.csrfToken(), title: "Login" });
  })
);

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("user-signup", { csrfToken: req.csrfToken(), title: "Sign Up" });
  })
);

router.post('/signup', csrfProtection, asyncHandler( async(req, res, next) => {

  const {
    username,
    firstName,
    lastName,
    phone,
    email,
    password,
    confirmPassword
  } = req.body;

  const newUser = await User.build({
    username,
    firstName,
    lastName,
    phone,
    email
  });

  let hashedPassword = await bcrypt.hash(password, 10);
  newUser.hashedPassword = hashedPassword;
  await newUser.save();
  loginUser(req, res, newUser);
  res.redirect('/');
}));

router.post('/login', csrfProtection, asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  //Find the user based on credentials (req)
  const user = await User.findOne({
    where: {
      email
    }
  });
  //if user found, compare their password to hashed password (bcrypt)
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

  //if passwords match, log in the user, redirect to root
    if (passwordMatch) {
      loginUser(req, res, user);
      return
  }
}

  // res.render('user-login', { title: 'Login', email, csrfToken: req.csrfToken() });
}));

router.post('/logout', async(req, res) => {
  logoutUser(req, res);
  return
});

module.exports = router;
