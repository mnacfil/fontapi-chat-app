const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate')
const { createMessage, getConversation } = require('../controllers/messageController');

router.post('/', authenticate, createMessage);
router.get('/:id',authenticate, getConversation);

module.exports = router