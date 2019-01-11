function boardUtils() {

    function displayBoard(containerId) {
        var board = prepareBoard();
        var boardTable = $("<table>");
        boardTable.attr("id", "board");
        var tileId = 1;
        // Iterate over the rows
        for (var i = 0; i < board[0].length; i++) {
            var row = $("<tr>");
            // Iterate over the columns
            for (var j = 0; j < board.length; j++) {
                var tile = $("<td>");
                tile.attr("id", tileId);
                var number = board[j][i];
                setTileClass(number, tile);
                row.append(tile);
                tileId++;
            }
            boardTable.append(row);
        }
        $("#" + containerId).html(boardTable);
    }


    function prepareBoard() {
        // Array of columns
        var generatedBoard = [];
        var takenNumbers = [];
        var minRandom = 0;
        for (var i = 0; i < 9; i++) {
            // Array of numbers
            var column = [];
            for (var j = 0; j < 3; j++) {
                var randNumber;
                do {
                    randNumber = randomNumberInRange(minRandom + 1, minRandom + 10);
                } while (takenNumbers.includes(randNumber))
                takenNumbers.push(randNumber);
                column.push(randNumber);
            }
            minRandom += 10;
            sortAscending(column);
            generatedBoard.push(column);
        }
        removeNumbers(generatedBoard);
        return generatedBoard;
    };

    function removeNumbers(board) {
        var numbersToBeRemoved = [];
        var takenNumbers = [];
        var numberCount = {};
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                var randNumber;
                do {
                    randNumber = randomNumberInRange(0, 8);
                } while (takenNumbers.includes(randNumber) || numberCount[randNumber] >= 2)
                takenNumbers.push(randNumber);
                numberCount[randNumber] = (numberCount[randNumber] == undefined ? 1 : numberCount[randNumber] + 1);
            }
            sortAscending(takenNumbers);
            numbersToBeRemoved.push(takenNumbers);
            takenNumbers = [];
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                var indexToBeRemoved = numbersToBeRemoved[i][j];
                board[indexToBeRemoved][i] = 0;
            }
        }
    };

    function setTileClass(number, tile) {
        if (number != 0) {
            tile.text(number);
            tile.click(function () {
                $(this).toggleClass("selected");
            });
        } else {
            tile.text("FREE");
            tile.toggleClass("free");
        }
    };

    function sortAscending(numberArray) {
        numberArray.sort(function (a, b) { return a - b; });
    };

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return {
        displayBoard: displayBoard
    };


};