function generateDeck(deckNo) {
    player.deck = [];
    
    var tempDeck = [];
    
    console.log(deckNo);
    
    if (deckNo === 1) {
        for (var i = 0; i < playerField.deck1.length; i++) {
            for (var j = 0; j < playerField.deck1[i][2]; j++) {
                var tempID = playerField.deck1[i][0];
                var tempIndex = findIndexFromID(tempID, cardData);
                tempDeck.push({'ID' : tempID,
                               'Type' : cardData[tempIndex]['Type'],
                               'Element' : cardData[tempIndex]['Element'],
                               'Rarity' : cardData[tempIndex]['Rarity'],
                               'Name' : cardData[tempIndex]['Name'],
                               'Energy' : cardData[tempIndex]['Energy'],
                               'Stat' : [cardData[tempIndex]['Stat'][0], cardData[tempIndex]['Stat'][1]],
                               'Special' : cardData[tempIndex]['Special'],
                               'Play' : [cardData[tempIndex]['Play'][0], cardData[tempIndex]['Play'][1], cardData[tempIndex]['Play'][2]],
                               'Upgrade' : playerField.deck1[1]});
            }
        }
    } else if (deckNo === 4) {
        for (var i = 0; i < playerDungeon.deck.length; i++) {
            tempDeck.push({'ID' : playerDungeon.deck[i]['ID'],
                           'Type' : playerDungeon.deck[i]['Type'],
                           'Element' : playerDungeon.deck[i]['Element'],
                           'Rarity' : playerDungeon.deck[i]['Rarity'],
                           'Name' : playerDungeon.deck[i]['Name'],
                           'Energy' : playerDungeon.deck[i]['Energy'],
                           'Stat' : [playerDungeon.deck[i]['Stat'][0], playerDungeon.deck[i]['Stat'][1]],
                           'Special' : playerDungeon.deck[i]['Special'],
                           'Play' : [playerDungeon.deck[i]['Play'][0], playerDungeon.deck[i]['Play'][1], playerDungeon.deck[i]['Play'][2]],
                           'Upgrade' : playerDungeon.deck[i]['Upgrade']});
        }
    }
    
    while (tempDeck.length > 0) {
        var tempIndex = Math.floor(Math.random() * tempDeck.length);
        var tempCard = tempDeck.splice(tempIndex, 1)[0];
        player.deck.push(tempCard);
    }
}

function startHandChange() {
    if (player.deck.length > 5) {
        for (var i = 0; i < 3; i++) {
            if (player.startHandChange[i] === true) {
                var tempCard = player.deck[i];
                player.deck[i] = player.deck[i + 3];
                player.deck[i + 3] = tempCard;
            }
        }
    }
}

function drawFromDeck() {
    
}

function playCard() {
    
}