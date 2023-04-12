const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const { 
    createConversation, 
    getUserConversation, 
    getChatConversationOfTwoUser 
} = require('../controllers/conversationController')

router.post('/', authenticate, createConversation);
router.get('/',authenticate, getUserConversation);
router.get('/chat/:userOneId/:userTwoId',authenticate, getChatConversationOfTwoUser);

module.exports = router;