const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    userInvolve: Array
}, { 
    timestamps: true
})

module.exports = mongoose.model('Conversation', ConversationSchema);