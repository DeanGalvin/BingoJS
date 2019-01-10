var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket) {
    socket.on('connect', function(user) {
        console.log('user connected: ' + user);
        io.emit('user messages', user + " has joined");
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(3000, function() {
    console.log('Listening for Bingo on 3000...');
});