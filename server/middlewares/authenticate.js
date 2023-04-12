const { isValidToken, getToken } = require('./utilities');

module.exports = (req, res, next) => {
    try {
        const token = getToken(req);
        const decode = isValidToken(token);
        req.user = decode;
        next();
    } catch (error) {
        throw new Error('Authentication Invalid');
    }
}
