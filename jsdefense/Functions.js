function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function shopRoll() {
    shop.itemList = [];
    var tempIndex1 = 0;
    var tempIndex2 = 0;
    var tempList = []

    for (var i = 0; i < 4; i++) {
        tempIndex1 = Math.floor(Math.random());
        tempIndex2 = findIndexFromID(shop.pool[tempIndex1], cardData);
        tempList.push({'ID' : shop.pool[tempIndex1]});
    }
}

function findIndexFromID(ID, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]['ID'] === ID) {
            return i;
        }
    }

    return -1;
}