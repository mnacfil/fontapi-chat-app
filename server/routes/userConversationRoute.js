const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const { 
    createConversation, 
    getUserConversation, 
    getChatConversationOfTwoUser 
} = require('../controllers/ConversationController')

router.post('/', authenticate, createConversation);
router.get('/:userId',authenticate, getUserConversation);
router.get('/chat/:userOneId/:userTwoId',authenticate, getChatConversationOfTwoUser);

module.exports = router;