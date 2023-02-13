const express = require('express');
const router = express.Router();
const {isNotAuth} = require('../middleware/authentication')

// Import the controllers
const authController = require('../controllers/auth.controller');

// Route for registration
router.get('/register', isNotAuth, authController.get_register);
router.post('/register', isNotAuth, authController.register);

// Route for login
router.get('/login', isNotAuth, authController.get_login);

router.post('/login', isNotAuth, authController.post_login);

router.get('/logout', isNotAuth, (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Error destroying session", err);
            return;
        }
    });
    res.redirect('/');
});
module.exports = router;