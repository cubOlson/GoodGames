const express = require("express");
const router = express.Router();

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
  res.redirect('/');
}));

module.exports = router;
