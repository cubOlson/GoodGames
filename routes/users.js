const express = require("express");
const router = express.Router();
const { loginUser, logoutUser } = require("../auth");
const { User } = require("../db/models/");
const {  asyncHandler,  csrfProtection,  bcrypt,  check,  validationResult,  loginValidation,  registerValidation,} = require("./utils");

/* GET */
router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // const user = await User.build();
    // // 'my username', 'my first name','my last name','206-555-2165','myemail@gmail.com'
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

/* POST */

// Register New User
router.post(
  "/signup",
  csrfProtection,
  registerValidation,
  asyncHandler(async (req, res, next) => {
    const { username, firstName, lastName, phone, email, password } = req.body;

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      const user = await User.build({
        username,
        firstName,
        lastName,
        phone,
        email,
      });

      let hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      return loginUser(req, res, user);
    } else {
      const errors = validationErrors.array().map((error) => error.msg);
      console.log(errors);
      res.render("user-signup", {
        errors,
        csrfToken: req.csrfToken(),
        title: "Login",
      });
    }
  })
);

// Login New User
router.post(
  "/login",
  csrfProtection,
  loginValidation,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const loginErrors = validationResult(req);
    let errors = [];
    if (loginErrors.isEmpty()) {
      try {
        const user = await User.findOne({ where: { email } });
        console.log(user);
        //if user found, compare their password to hashed password (bcrypt)
        if (user) {
          const passwordMatch = await bcrypt.compare(
            password,
            user.hashedPassword.toString()
          );

          //if passwords match, log in the user, redirect to root
          if (passwordMatch) {
            return loginUser(req, res, user);
          }
        } else {
          errors = loginErrors.array().map((error) => error.msg);
        }
        res.render("user-login", {
          errors,
          title: "Login",
          csrfToken: req.csrfToken(),
        });
      } catch (err) {
        console.log(err);
        next(err);
      }
    }
  })
);

//Log out authentocated user
router.post("/logout", async (req, res) => {
  return logoutUser(req, res);
});

module.exports = router;
