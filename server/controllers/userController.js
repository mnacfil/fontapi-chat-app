const {createToken, payload, responseTemplate} = require('../middlewares/utilities');
const User = require('../models/User')
const { getUserConversation } = require('./conversationController')

const register = async(req, res) => {
    const user = await User.create(req.body);
    const payloadUser = payload(user);
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS',
            'Successfully register the user',
            data = { payloadUser, token: createToken(payloadUser)}
        ));

}
const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        throw new BadRequest('Please fill out all field');
    }
    const user = await User.findOne({ email });
    const isPasswordMatch = await user.isPasswordMatch(password);
    if(!isPasswordMatch) {
        throw new BadRequest('Invalid Credential, email or password is incorrect');
    }
    const payloadUser = payload(user);
    res.
        status(200).
        json(responseTemplate(
            'SUCCESS',
            'Successfully login the user',
            data = { payloadUser, token: createToken(payloadUser)}
        ));
}

const getAllUser = async(req, res) => {
    const users = await User.find({});
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS',
            'Successfully register the user',
            data = users
        ));
}

const getUser = async(req, res) => {
    const user = await User.findOne({_id: req.params.id});
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS',
            'Successfully register the user',
            data = user
        ));
}

module.exports = {
    register,
    login,
    getAllUser,
    getUser
}