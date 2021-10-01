var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ErrorHandlerr = require('express-error-handler');

//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//const { redisClient,
  //RedisStore,
  //session } = require("./database/redis");


//var indexRouter = require('./routes/index');
//var userRouter = require('./routes/user');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//for redis
//app.use(session({
 // store: new RedisStore({ client: redisClient }),
  //secret: 'secret$%123',
  //resave: false,
  //saveUninitialized: false,
  //cookie:{
    //secure: false,
    //httpOnly: false,
    //maxAge: 1000 * 60 *10
  //}
//}))
//app.use('/', indexRouter);
//app.use('/user', userRouter);
//app.use('/passport', require("./routes/passport"));
//app.use('/products', require("./routes/products"));
app.use('/stream', require("./routes/stream"));//for video stream
app.use('/stripe', require("./routes/stripe"));//for stripe payment
app.use('/search', require("./routes/search"));//for implement search

// catch 404 and forward to error handler
//app.get('/',(req, res) =>
 // next(createError(404));
//});

//error handler
//app.use(function(err, req, res, next) {
 //set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

   //render the error page
  //res.status(err.status || 500);
  //res.render('error');
//});

module.exports = app;
app.listen(3000);