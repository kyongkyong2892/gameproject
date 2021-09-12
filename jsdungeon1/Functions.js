function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function newGame() {
    game.scene = 'Field';
    camera.x = -320;
    camera.y = -64;
    field.place = 'Home';
    generateField('Home');
    
    playerField.cards = [[10001, '', 3], [10002, '', 3], [10003, '', 3], [10004, '', 3], [10005, '', 3]];
    playerField.deck1 = [[10001, '', 3], [10002, '', 3], [10003, '', 3], [10004, '', 3], [10005, '', 3]];
}

function generateField(place) {
    field.terrain = [];
    field.floor = [];
    field.objects = [];

    var temp = [];

    for (var i = 0; i < terrainData[place].length; i++) {
        temp = [];

        for (var j = 0; j < terrainData[place][0].length; j++) {
            temp.push(terrainData[place][i][j]);
        }

        field.terrain.push(temp);
    }

    for (var i = 0; i < floorData[place].length; i++) {
        temp = [];

        for (var j = 0; j < floorData[place][0].length; j++) {
            temp.push(floorData[place][i][j]);
        }

        field.floor.push(temp);
    }

    for (var i = 0; i < objectData[place].length; i++) {
        temp = [];

        for (var j = 0; j < objectData[place][0].length; j++) {
            temp.push(objectData[place][i][j]);
        }

        field.objects.push(temp);
    }

    for (var i = 0; i < connectionData[place].length; i++) {
        temp = [[connectionData[place][i][0][0], connectionData[place][i][0][1]], connectionData[place][i][1], [connectionData[place][i][2][0], connectionData[place][i][2][1]], [connectionData[place][i][3][0], connectionData[place][i][3][1]]];
        field.placeConnection.push(temp);
    }
}

function eraseField() {
    field.terrain = [];
    field.floor = [];
    field.objects = [];
    field.placeConnection = [];
}

function dungeonStart(heroID, skillID, deckID) {
    playerDungeon.deck = [];
    
    // Deck Generate
    for (var i = 0; i < deckData[deckID]['Cards'].length; i++) {
        var tempID = deckData[deckID]['Cards'][i];
        var tempIndex = findIndexFromID(tempID, cardData);
        playerDungeon.deck.push({'ID' : tempID,
                                 'Type' : cardData[tempIndex]['Type'],
                                 'Element' : cardData[tempIndex]['Element'],
                                 'Rarity' : cardData[tempIndex]['Rarity'],
                                 'Name' : cardData[tempIndex]['Name'],
                                 'Energy' : cardData[tempIndex]['Energy'],
                                 'Stat' : [cardData[tempIndex]['Stat'][0], cardData[tempIndex]['Stat'][1]],
                                 'Special' : cardData[tempIndex]['Special'],
                                 'Play' : [cardData[tempIndex]['Play'][0], cardData[tempIndex]['Play'][1], cardData[tempIndex]['Play'][2]],
                                 'Upgrade' : ''});
    }
    
    playerDungeon.life = 20;
}

function dungeonBattleStart() {
    game.state = 'Start';
    generateDeck(4);
}

function gameStart() {
    for (var i = 0; i < 3; i++) {
        drawFromDeck();
    }

    battle.field.push({'ID' : 1001, 'Type' : 'Hero', 'Element' : 'Neutral', 'Rarity' : 'Basic', 'Name' : 'Hero 1', 'Energy' : 0, 'Stat' : [0, 20, 20], 'Special' : '', 'Side' : 0, 'Moves' : [0, 0], 'Position' : -1});
    battle.field.push({'ID' : 1002, 'Type' : 'Hero', 'Element' : 'Neutral', 'Rarity' : 'Basic', 'Name' : 'Green Jelly Slime', 'Energy' : 0, 'Stat' : [0, 10, 10], 'Special' : '', 'Side' : 1, 'Moves' : [0, 0], 'Position' : -1});
}

function firstTurnStart() {
    drawFromDeck();
}

function findIndexFromID(ID, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]['ID'] === ID) {
            return i;
        }
    }
    
    return -1;
}