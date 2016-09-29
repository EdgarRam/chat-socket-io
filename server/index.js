// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.sendFile( __dirname + '/index.html');
// });
//
// http.listen(3010, function(){
//     console.log('listening on http://localhost:3010');
// });



var app = require('http').createServer( handler );
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3010, "0.0.0.0");

function handler (req, res) {
    var method = req.method.toLowerCase()
    var url = req.url


    console.log( url );

    if( method === "get" && url === "/" ){
        fs.readFile(__dirname + '/../build/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
    }
    else{
        fs.readFile(__dirname + '/../build'+url,
        function (err, data) {
            if (err) {
                return res.writeHead(404);
            }

            res.writeHead(200);
            res.end(data);
        });
    }
}


io.on('connection', function(socket){
    io.emit('hi', 'everyone');

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });


    socket.on('disconnect', function(msg){
        io.emit('chat message', "close");
    });



});
