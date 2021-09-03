function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function generateField(place) {
    field.terrain = [];
    field.structure = [];
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
    for (var i = 0; i < structureData[place].length; i++) {
        temp = [];

        for (var j = 0; j < structureData[place][0].length; j++) {
            temp.push(structureData[place][i][j]);
        }

        field.structure.push(temp);
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