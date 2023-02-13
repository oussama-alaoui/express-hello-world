const express = require('express');
const router = express.Router();
const {isAuth} = require('../middleware/authentication')

// Import the authentication middleware
// const authMiddleware = require('./middleware/auth');

// Import the controllers
const chatController = require('../controllers/chat.controller');

router.get('/', isAuth, chatController.get_chat);

router.get('/contacts', isAuth, chatController.get_contacts);

module.exports = router;
