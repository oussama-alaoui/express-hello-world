var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const session = require('express-session');
var flash = require('express-flash')
const passport = require('passport');
const acl = require('express-acl');



var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var chatRouter = require('./routes/chat');
var settingsRouter = require('./routes/settings');
var newadsRouter = require('./routes/newads');
var productsRouter = require('./routes/products');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*/uploads', express.static('uploads'));
dotenv.config();
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())


// Use Routes
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/chat', chatRouter);
app.use('/account', settingsRouter);
app.use('/newads', newadsRouter);
app.use('/products', productsRouter);


// connect to mongodb
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('_err/404');
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

module.exports = app;
