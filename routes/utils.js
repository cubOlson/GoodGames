const csrf = require("csurf");
const bcrypt = require("bcryptjs")
// const cookieParser = require('cookie-parser');
const {check, validationResult} = require('express-validator');

const csrfProtection = csrf({ cookie: true })

const asyncHandler = (handler) => (req, res, next) => {
    return handler(req, res, next).catch(next)
}

module.exports = {
    asyncHandler,
    csrfProtection,
    bcrypt,
    check,
    validationResult
}
