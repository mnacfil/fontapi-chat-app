const Message = require('../models/Message');
const { responseTemplate } = require('../middlewares/utilities');

const createMessage = async(req, res) => {
    console.log(req.user);
    const message = await Message.create(req.body);
    res.status(200).json(responseTemplate(
        'SUCCESS',
        'Succesfully create a message',
        message
    ));
}

const getConversation = async(req, res) => {
    const conversations = await Message.find({ conversationId: req.params.id });
    res.status(200).json(responseTemplate(
        'SUCCESS',
        'Succesfully get the conversations ',
        conversations
    ));
}

module.exports = {
    createMessage,
    getConversation
}