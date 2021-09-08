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

function dungeonBattleStart() {
    game.state = 'Start';
}

function findIndexFromID(ID, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]['ID'] === ID) {
            return i;
        }
    }
    
    return -1;
}