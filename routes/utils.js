const csrf = require("csurf");
const bcrypt = require("bcryptjs")
const {check, validationResult} = require('express-validator');
const csrfProtection = csrf({ cookie: true })

const sanityCheck = (req, res, next) => {
    console.log(`I made it!!!`)
    next();
}

const asyncHandler = (handler) => (req, res, next) => {
    return handler(req, res, next).catch(next)
}

// email password validation for user login
const loginValidation = [
    check('email')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid password.'),
]

// check that review content is not null when submitting review
const reviewValidation = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid email.'),
    check('content')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid password.'),
]

// registration validation for new user sign up
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
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must have one digit, one lower-case, one upper-case, and one special character.'),
    check('confirmPassword')
        .custom((value, { req }) => {
            if (value !== req.body.password) throw new Error('Confirm Password does not match Password');
            return true;
        }),
]

// handle javscript errors

module.exports = {
    asyncHandler,
    csrfProtection,
    bcrypt,
    check,
    validationResult,
    loginValidation,
    registerValidation,
    sanityCheck,
}
