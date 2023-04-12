const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: {
        type: String
    },
    sender: {
        type: String
    },
    conversationId: {
        type: String
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema);