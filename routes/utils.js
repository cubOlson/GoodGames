const csurf = require("csurf");
const csurfProtection = csurf({ cookie: true })
const bcrypt = require("bcryptjs")
const {check, validationResult} = require('express-validator');
const asyncHandler = (handler) => (req, res, next) => {
    return handler(req, res, next).catch(next)
}



module.exports = {
    asyncHandler,
    csurfProtection,
    bcrypt,
    check,
    validationResult
}