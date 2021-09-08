function generateDeck(deckNo) {
    player.deck = [];
    
    var tempDeck = [];
    
    if (deckNo === 1) {
        for (var i = 0; i < playerField.deck1.length; i++) {
            for (var j = 0; j < playerField.deck1[i][2]; j++) {
                var tempID = playerField.deck1[i][0];
                var tempIndex = findIndexFromID(tempID, cardData);
                tempDeck.append({'ID' : tempID,
                                 'Type' : cardData[tempIndex]['ID'],
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
    }
    
    for (var i = 0; i < tempDeck.length; i++) {
        var tempIndex = Math.floor(Math.random() * tempDeck.length);
        var tempCard = tempDeck.splice(tempIndex, 1)[0];
        player.deck.append(tempCard);
    }
}

function startHandChange() {
    
}

function drawFromDeck() {
    
}

function playCard() {
    
}