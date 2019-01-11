function winnerValidation(sumbittedCard, pastNums, userName) {
    var submittedLength = sumbittedCard.length;

 //conditions of a win//

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

//horizontal line
////////////////////////////////////////////Short////////////////////////////////////////
    var firstHorizontalLine = true;     //assume that it is true until proven wrong
    var secondHorizontalLine = true;     //assume that it is true until proven wrong
    var thirdHorizontalLine = true;     //assume that it is true until proven wrong

    var firstIterator = 1;
    var secondIterator = 2;
    var thirdIterator = 3;

    //check if each line has 5
    var count1 = 0;
    for(firstIterator; firstIterator<=27; firstIterator+3) {
        if(idExistsInArray(firstIterator,submittedCard)) {
            count1++;
        }
    }
    var count2 = 0;
    for(secondIterator; secondIterator<=27; secondIterator+3) {
        if(idExistsInArray(secondIterator,submittedCard)) {
            count2++;
        }
    }
    var count3 = 0;
    for(thirdIterator; thirdIterator<=27; thirdIterator+3) {
        if(idExistsInArray(thirdIterator,submittedCard)) {
            count3++;
        }
    }

    //
    if(count1<5) {
        firstHorizontalLine = false;
    } else {    //still looking for criteria to fale row 1 on
        for(firstIterator=1; firstIterator<=27; firstIterator+3) {
            //if in submitted
            if(idExistsInArray(firstIterator,submittedCard)) {
                //if value in past 
                if(!pastNums.includes(getValueWithId(firstIterator,submittedCard))){
                    firstHorizontalLine = false;
                }
            }
        }
    }
    if(count2<5) {
        secondHorizontalLine = false;
    } else {    //still looking for criteria to fale row 1 on
        for(secondIterator=2; secondIterator<=27; secondIterator+3) {
            //if in submitted
            if(idExistsInArray(secondIterator,submittedCard)) {
                //if value in past 
                if(!pastNums.includes(getValueWithId(secondIterator,submittedCard))){
                    secondHorizontalLine = false;
                }
            }
        }
    }
    if(count3<5) {
        thirdHorizontalLine = false;
    } else {    //still looking for criteria to fale row 1 on
        for(thirdIterator=3; thirdIterator<=27; thirdIterator+3) {
            //if in submitted
            if(idExistsInArray(thirdIterator,submittedCard)) {
                //if value in past 
                if(!pastNums.includes(getValueWithId(thirdIterator,submittedCard))){
                    thirdHorizontalLine = false;
                }
            }
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

    // if ( sumbittedCard.includes(sumbittedCard.id(1)) &&
    //         sumbittedCard.includes(sumbittedCard.id(4)) &&
    //         sumbittedCard.includes(sumbittedCard.id(7)) &&
    //         sumbittedCard.includes(sumbittedCard.id(10)) &&
    //         sumbittedCard.includes(sumbittedCard.id(13)) &&
    //         sumbittedCard.includes(sumbittedCard.id(16)) &&
    //         sumbittedCard.includes(sumbittedCard.id(19)) &&
    //         sumbittedCard.includes(sumbittedCard.id(22)) &&
    //         sumbittedCard.includes(sumbittedCard.id(25))) {
    //     playerWon(playerName);
    //     return 'Winner!';
    // }
    // if ( sumbittedCard.includes(sumbittedCard.id(2)) &&
    //         sumbittedCard.includes(sumbittedCard.id(5)) &&
    //         sumbittedCard.includes(sumbittedCard.id(8)) &&
    //         sumbittedCard.includes(sumbittedCard.id(11)) &&
    //         sumbittedCard.includes(sumbittedCard.id(14)) &&
    //         sumbittedCard.includes(sumbittedCard.id(17)) &&
    //         sumbittedCard.includes(sumbittedCard.id(20)) &&
    //         sumbittedCard.includes(sumbittedCard.id(24)) &&
    //         sumbittedCard.includes(sumbittedCard.id(26))) {
    //     playerWon(playerName);
    //     return 'Winner!';
    // }
    // if ( sumbittedCard.includes(sumbittedCard.id(3)) &&
    //         sumbittedCard.includes(sumbittedCard.id(6)) &&
    //         sumbittedCard.includes(sumbittedCard.id(9)) &&
    //         sumbittedCard.includes(sumbittedCard.id(12)) &&
    //         sumbittedCard.includes(sumbittedCard.id(15)) &&
    //         sumbittedCard.includes(sumbittedCard.id(18)) &&
    //         sumbittedCard.includes(sumbittedCard.id(21)) &&
    //         sumbittedCard.includes(sumbittedCard.id(25)) &&
    //         sumbittedCard.includes(sumbittedCard.id(27))) {
    //     playerWon(playerName);
    //     return 'Winner!';
    // }
///////////////////////////////////////////////////////////////////////////////////////////

//All blocks are filled
    if (submittedLength == 15) {
        for (var j=0; j>submittedLength; j++) {
            if (!pastNums.includes(getValueWithId(j, submittedCard))) {
                return 'Not a winner';
            }
        }
        playerWon(playerName);
        return 'Winner!';
    }
    return 'Not a Winner'
}