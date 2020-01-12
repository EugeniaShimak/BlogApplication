var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/usersRouter');
var postsRouter = require('./routes/postsRouter');
//var loginRouter = require('./routes/loginRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(function (req, res, next) {
    next(createError(404));

});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    console.log('Error occur:', err);
    res.send({error: err});
});

module.exports = app;

