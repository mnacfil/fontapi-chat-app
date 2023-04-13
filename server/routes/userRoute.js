const express = require('express');
const router = express.Router();
const { register, login, getAllUser, getUser } = require('../controllers/userController');
const  autenticate  = require('../middlewares/authenticate')
// register
router.post('/register', register);
// login
router.post('/login', login);

router.get('/users', autenticate, getAllUser);
router.get('/users/:id', autenticate, getUser);
module.exports = router;