function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
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

    temp = [];
    for (var i = 0; i < floorData[place].length; i++) {
        temp = [];

        for (var j = 0; j < floorData[place][0].length; j++) {
            temp.push(floorData[place][i][j]);
        }

        field.floor.push(temp);
    }

    temp = [];
    for (var i = 0; i < objectData[place].length; i++) {
        temp = [];

        for (var j = 0; j < objectData[place][0].length; j++) {
            temp.push(objectData[place][i][j]);
        }

        field.objects.push(temp);
    }
}

function dungeonBattleStart() {
    game.state = 'Start';
}