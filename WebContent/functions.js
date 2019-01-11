

function sequenceGen(){

    //loop while game state is true

    var pastNumbers = {};

    //generate new number
    var randNum = Math.floor(Math.random()*Math.floor(90));
    while (pastNumbers.includes(randNum)) {     //if the random number is already in the array
        randNum = Math.floor(Math.random()*Math.floor(90));
    }
    pastNumbers.push(randNum);
}

function winnerValidation(sumbittedCard, pastNums, userName) {
    //rest end point to check game state
    var submittedLength = sumbittedCard.length;
    // var pastNums = sequenceGen.pastNumbers;
    //getPastNumbers{}

    //conditions of a win//

    //All blocks are filled
    if (submittedLength == 15) {
        for (var j=0; j>submittedLength; j++) {
            if (!pastNums.includes(sumbittedCard[j].value)) {
                return 'Not a winner';
            }
        }
        playerWon(playerName);
        return 'Winner!';
    }

    //four corners logic
    //if submitted have id 1,3,25,27
    if (idExistsInArray('1', sumbittedCard) && 
        idExistsInArray('3', sumbittedCard) && 
        idExistsInArray('25', sumbittedCard) && 
        idExistsInArray('27', sumbittedCard)) {

        //if submitted with these ids are in pastNums
        if (pastNums.includes(getValueWithId('1', sumbittedCard)) && 
            pastNums.includes(getValueWithId('3', sumbittedCard)) && 
            pastNums.includes(getValueWithId('25', sumbittedCard)) && 
            pastNums.includes(getValueWithId('27', sumbittedCard)) ) {

            playerWon(playerName);
            return 'Winner!';
        }
    }

    function idExistsInArray(id, array) {
        return array.filter(e => e.id === id).length > 0;
    }

    function getValueWithId(id, array) {
        return array.filter(e => e.id === id)[0].value;
    }

    //line
////////////////////////////////////////////Short////////////////////////////////////////
    var firstHorizontalLine = true;     //assume that it is true until proven wrong
    for(var x=1;x<=27; x+3) {
        if(!sumbittedCard.includes(sumbittedCard.id(x))) {
            firstHorizontalLine = false;
        }
    }
    var secondHorizontalLine = true;     //assume that it is true until proven wrong
    for(var x=1;x<=27; x+3) {
        if(!sumbittedCard.includes(sumbittedCard.id(x))) {
            secondHorizontalLine = false;
        }
    }
    var thirdHorizontalLine = true;     //assume that it is true until proven wrong
    for(var x=1;x<=27; x+3) {
        if(!sumbittedCard.includes(sumbittedCard.id(x))) {
            thirdHorizontalLine = false;
        }
    }
    //check for two lines
    if (firstHorizontalLine==true && (secondHorizontalLine==true || thirdHorizontalLine==true)) {
        playerWon(playerName);
        return 'Winner! score X2';
    }
    if (secondHorizontalLine==true && (firstHorizontalLine==true || thirdHorizontalLine==true)) {
        playerWon(playerName);
        return 'Winner! score X2';
    }
    if (thirdHorizontalLine==true && (firstHorizontalLine==true || secondHorizontalLine==true)) {
        playerWon(playerName);
        return 'Winner! score X2';
    }
    //check for one line
    if (firstHorizontalLine==true) {
        playerWon(playerName);
        return 'Winner!';
    }
    if (secondHorizontalLine==true) {
        playerWon(playerName);
        return 'Winner!';
    }
    if (thirdHorizontalLine==true) {
        playerWon(playerName);
        return 'Winner!';
    }
//////////////////////////////////////////Long//////////////////////////////////////////

    if ( sumbittedCard.includes(sumbittedCard.id(1)) &&
            sumbittedCard.includes(sumbittedCard.id(4)) &&
            sumbittedCard.includes(sumbittedCard.id(7)) &&
            sumbittedCard.includes(sumbittedCard.id(10)) &&
            sumbittedCard.includes(sumbittedCard.id(13)) &&
            sumbittedCard.includes(sumbittedCard.id(16)) &&
            sumbittedCard.includes(sumbittedCard.id(19)) &&
            sumbittedCard.includes(sumbittedCard.id(22)) &&
            sumbittedCard.includes(sumbittedCard.id(25))) {
        playerWon(playerName);
        return 'Winner!';
    }
    if ( sumbittedCard.includes(sumbittedCard.id(2)) &&
            sumbittedCard.includes(sumbittedCard.id(5)) &&
            sumbittedCard.includes(sumbittedCard.id(8)) &&
            sumbittedCard.includes(sumbittedCard.id(11)) &&
            sumbittedCard.includes(sumbittedCard.id(14)) &&
            sumbittedCard.includes(sumbittedCard.id(17)) &&
            sumbittedCard.includes(sumbittedCard.id(20)) &&
            sumbittedCard.includes(sumbittedCard.id(24)) &&
            sumbittedCard.includes(sumbittedCard.id(26))) {
        playerWon(playerName);
        return 'Winner!';
    }
    if ( sumbittedCard.includes(sumbittedCard.id(3)) &&
            sumbittedCard.includes(sumbittedCard.id(6)) &&
            sumbittedCard.includes(sumbittedCard.id(9)) &&
            sumbittedCard.includes(sumbittedCard.id(12)) &&
            sumbittedCard.includes(sumbittedCard.id(15)) &&
            sumbittedCard.includes(sumbittedCard.id(18)) &&
            sumbittedCard.includes(sumbittedCard.id(21)) &&
            sumbittedCard.includes(sumbittedCard.id(25)) &&
            sumbittedCard.includes(sumbittedCard.id(27))) {
        playerWon(playerName);
        return 'Winner!';
    }
///////////////////////////////////////////////////////////////////////////////////////////

}