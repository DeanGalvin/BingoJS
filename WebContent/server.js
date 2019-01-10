var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var gameState = false;
var players = [];
var publishedNumbers = [];
var randNumber = 9999;

app.use(express.static('public'));

io.on('connection', function(socket) {
    socket.on('connect', function(user) {
        console.log('user connected: ' + user);
        players.push(user);
        io.emit('user messages', user + " has joined");
        if (players.length === 2) {
                startGame();
        }
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

function publishNumbers() {
    do {
        randNumber = randomNumberInRange(1, 90);
    } 
    while(publishedNumbers.includes(randNumber));

    io.emit('game numbers', randNumber);

    if (gameState = true) {
        setTimeout(publishNumbers, 5000);
    }
}

function startGame() {
    gameState = true;
    publishNumbers();
}

function refreshGame() {
    gameState = false;
    players = [];
    publishedNumbers = [];
}

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

http.listen(3000, function() {
    console.log('Listening for Bingo on 3000...');
});