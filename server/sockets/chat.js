
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
