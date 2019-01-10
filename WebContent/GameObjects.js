function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var Tile = function(gridNumber, value, clicked) {
    this.gridNumber = gridNumber;
    this.value = value;
    this.clicked = clicked;
}

var Board = function(player, tiles) {
    this.player = player;
    this.tiles = tiles;
}
Board.prototype = {
    GenerateBoard: function() {
        var takenNumbers = [];
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 3; j++) {
                var randNumber = randomNumberInRange(1, 10);
                if (i !== 0) {
                    randNumber = randNumber + (i * 10);
                }
            }
        }
    }
}