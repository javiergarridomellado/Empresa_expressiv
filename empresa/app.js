var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

//anadido assert
var alumnos = require('./routes/empresas');
//
var app = express();

var empresas = require('./routes/empresas');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


//assert
//app.use('/alumnos', alumnos);
//anadido
app.get('/alumnos', empresas.get_listar_alumnos);
//


app.get('/', routes.index);
app.get('/users', users.list);
//anadido
/*app.get('/prueba', function(req, res){
   res.render('prueba');
});*/

app.get('/enviar_empresa', empresas.get_enviar_empresa);
app.post('/enviar_empresa', empresas.post_enviar_empresa);

app.get('/eliminar_empresa', empresas.get_eliminar_empresa);
app.post('/eliminar_empresa', empresas.post_eliminar_empresa);



//


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
