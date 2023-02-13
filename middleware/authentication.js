const passport = require('passport')
var userModule = require('../models/users.model');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModule.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

exports.isNotAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    return next();
}