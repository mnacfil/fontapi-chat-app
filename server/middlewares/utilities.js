const jwt = require('jsonwebtoken');

const createToken =  ( payload ) => jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION
})

const isValidToken = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

const payload = (user) => {
    const { firstName, lastName, email, _id} = user;
    return {
        firstName,
        lastName,
        email,
        userID: _id
    }
}

const getToken = (req) => {
    const [ name, token ] = req.headers.authorization.split(' ');
    return token;
} 

const responseTemplate = (status, message, data) => {
    return {
        status,
        message,
        data
    }
}

module.exports = {
    createToken,
    isValidToken,
    getToken,
    payload,
    responseTemplate
}