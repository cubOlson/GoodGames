const csrf = require("csurf");
const bcrypt = require("bcryptjs")
// const cookieParser = require('cookie-parser');
const {check, validationResult} = require('express-validator');

const csrfProtection = csrf({ cookie: true })

const asyncHandler = (handler) => (req, res, next) => {
    return handler(req, res, next).catch(next)
}

// email password validation
const loginValidation = [
    check('email')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid password.'),
]

// registration validation
const registerValidation = [
    check('firstName')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid first name.'),
    check('lastName')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid last name.'),
    check('username')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid username.'),
    check('email')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid password.')
        .isLength({ min: 4}),
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/, "i")
        // .withMessage('Password must have one digit, one lower-case, one upper-case, and one number.'),
        // must have one digit, one lower-case, one upper-case, one number ... min 4 chars
    check('confirmPassword')
        .matches('password')
        .withMessage('Passwords must match.'),
]

module.exports = {
    asyncHandler,
    csrfProtection,
    bcrypt,
    check,
    validationResult,
    loginValidation,
    registerValidation,
}
