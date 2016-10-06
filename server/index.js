/**
    ** Module dependencies.
**/
// var redis = require('redis')
const express = require( 'express' )
const app = express()
const http = require( 'http' ).Server(app)
const io = require( 'socket.io' )(http)
const favicon = require( 'serve-favicon' )

const middlewares = require( './middlewares/middleware' )
const routes = require( './router/router' )
const port = process.env.PORT || 3000

// var rooms = [ 'Lobby' ]
// var usernames = {}


//init middleware
middlewares( app, express );

//init routes
routes( app )


http.listen( port, '0.0.0.0', () =>
    console.log( 'Express server listening on port ' + port )
)
