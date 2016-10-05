/**
    ** Module dependencies.
**/
// var redis = require('redis')
var express = require('express')
var app = express()
var bodyParser = require ('body-parser')
var methodOverride = require('method-override')
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')
var morgan = require('morgan')
var favicon = require('serve-favicon')


var routes = require('./router/router')
const port = process.env.PORT || 3000
var rooms = ['Lobby']
var usernames = {}


// all environments
// app.use(favicon(__dirname + '/public/favicon.ico'))
app.use( morgan('combined') ) //trazas
app.set( 'port', port )
app.use( bodyParser.json() )
app.use( methodOverride() )
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( express.static( path.join(__dirname, '/../build') ))
// development only
if ('development' == app.get('env') ) {
    app.use(function(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(500);
        res.render('error', { error: err });
    });
}


//init routes
routes(app)


http.listen( port, '0.0.0.0', () =>
    console.log( 'Express server listening on port ' + port )
)
