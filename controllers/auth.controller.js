var userModule = require('../models/users.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.register = async (req, res) => {
    const { username, email} = req.body;
    const password = bcrypt.hashSync(req.body.password, 8)
    try {
        const user = await userModule.create({ username, password, email });
        console.log("good");
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'User registration failed' });
    }
};

exports.get_register = (req, res) => {
    res.render('auth/signup', { title: 'Register' });
}

exports.get_login = (req, res) => {
    res.render('auth/login', { title: 'Login' })
}

exports.post_login = (req, res, next) => {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
      },
      async (username, password, done) => {
        try {
          const user = await userModule.findOne({ username: username });
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
          const isMatch = await bcrypt.compare(password, user.password);
          console.log(user)
          if (!isMatch) {
            return done(null, false, { message: 'Invalid password' });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    ));
    passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
    })(req, res, next);
}