/**
    ** Module dependencies.
**/

var redis = require('redis');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var rooms = ['Lobby'];
var usernames = {};


// all environments
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'src/views'));
// app.set('view engine', 'pug');
app.use( express.favicon() );
app.use( express.logger('dev') );
app.use( express.json() );
app.use( express.urlencoded() );
app.use( express.methodOverride() );

app.use( express.cookieParser() );
app.use( express.session({secret: 'abcd1234'}) );

app.use( express.static( path.join(__dirname, '/../build') ));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get( '/', (req, res) => {
    res.sendfile( 'index.html' );
});

http.listen(3010, () =>
  console.log('Express server listening on port ' + 3010)
)


io.on('connection', (socket) => {

    socket.on('adduser', ( _username ) =>{
        socket.username = _username
        socket.room = 'Lobby'
        usernames[username] = username;
        socket.join('Lobby');
        socket.emit('chat', 'SERVER', 'you have connected to Lobby');

    })

    socket.on( 'init chat', () =>{
        socket.emit('welcome user', 'hola ' + socket.username );
        socket.emit('updaterooms', rooms, 'Lobby');
    })

    socket.on('chat message', ( id, msg ) =>{
        socket.emit('chat message', msg)
    })


    socket.on('disconnect', ( msg ) => {
        socket.emit('chat message', "close" + socket.username );
    })

});
