const Message = require('../models/Message');
const { responseTemplate } = require('../middlewares/utilities');

const createMessage = async(req, res) => {
    req.body.sender = req.user.userID;
    const message = await Message.create(req.body);
    res.status(200).json(responseTemplate(
        'SUCCESS',
        'Succesfully create a message',
        message
    ));
}

const getConversation = async(req, res) => {
    const conversation = await Message.find({ conversationId: req.params.id });
    res.status(200).json(responseTemplate(
        'SUCCESS',
        'Succesfully get the conversations ',
        conversation
    ));
}

module.exports = {
    createMessage,
    getConversation
}