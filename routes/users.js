const express = require("express");
const router = express.Router();
const {
  asyncHandler,
  csurfProtection,
  bcrypt,
  check,
  validationResult,
} = require("./utils");

/* GET users listing. */
router.get(
  "/login",
  csurfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("user-login", { csrfToken: req.csrfToken(), title: "Login" });
  })
);

router.get(
  "/signup",
  csurfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("user-signup", { csrfToken: req.csrfToken(), title: "Sign Up" });
  })
);

module.exports = router;
