const jwt = require('jsonwebtoken')
const ENV_VARS = require('../config/envVars')


const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

    // Set the cookie with appropriate options
    res.cookie("jwt-edu", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        sameSite: "lax", // Change to "lax" for local development
        secure: ENV_VARS.NODE_ENV === "production" // Only true in production
    });

    return token;
};


module.exports = generateTokenAndSetCookie