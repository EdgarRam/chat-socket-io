
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


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

app.get('/', function(req, res) {
    res.sendfile( 'index.html' );
});

http.listen(3010, function(){
  console.log('Express server listening on port ' + 3010);
});


io.on('connection', function(socket){
    io.emit('hi', 'everyone');

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });


    socket.on('disconnect', function(msg){
        io.emit('chat message', "close");
    });

});
