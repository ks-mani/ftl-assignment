var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const dbConf = require('./dbConfig.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiUserRouter = require('./routes/apiUsers.js')

mongoose
  .connect(dbConf.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db)=>{
    console.log("Connected Correctly to the Server");
  }, (err)=>{
    console.log("Error Occurred");
  })


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', apiUserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
