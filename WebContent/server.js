var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var gameState = false;
var players = [];
var publishedNumbers = [];
var randNumber = 9999;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var router = express.Router();

router.get('/gamestate', function(req, res) {
    res.json({State: gameState});
});

router.post('/validation', function (req, res) {
    var result = winnerValidation(req.body.gamecard, req.body.player);
    res.json({result: result});
});

io.on('connection', function(socket) {
    socket.on('joined game', function(user) {
        console.log('user connected: ' + user);
        players.push(user);
        io.emit('user messages', user + ": has joined");
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
    while (publishedNumbers.includes(randNumber) && publishedNumbers.length < 90);


    if (publishedNumbers.length == 90) {
        return;
    }

    publishedNumbers.push(randNumber);
    io.emit('game numbers', randNumber);
    if (gameState = true) {
        setTimeout(publishNumbers, 3000);
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
    if (players.length === 2) {
        startGame();
    }
}

function playerWon(player) {
    io.emit('user messages', player + " has won!!");
    io.emit('refresh', "refresh the client");
    refreshGame();
}

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function winnerValidation(sumbittedCard, playerName) {
    //rest end point to check game state
    var submittedLength = sumbittedCard.length;

    //All blocks are filled
    if (submittedLength == 15) {
        for (var j = 0; j < submittedLength; j++) {
            if (!publishedNumbers.includes(parseInt(sumbittedCard[j].value))){
                return 'Not a winner';
            }
        }
        playerWon(playerName);
        return 'Winner!';
    }
}

app.use('/game', router);

http.listen(3000, function() {
    console.log('Listening for Bingo on 3000...');
});