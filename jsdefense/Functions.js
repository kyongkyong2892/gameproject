function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function shopRoll() {
    shop.itemList = [];
    var tempIndex1 = 0;
    var tempIndex2 = 0;
    var tempList = []

    for (var i = 0; i < 4; i++) {
        tempIndex1 = Math.floor(Math.random() * shop.itemPool.length);
        tempIndex2 = findIndexFromID(shop.itemPool[tempIndex1], cardData);
        shop.itemList.push({'ID' : shop.itemPool[tempIndex1]});
    }
}

function battleExtraStart() {
    shop.level = 1;
    player.gold = 6;
    player.goldMax = 6;
    shopRoll();
}

function findIndexFromID(ID, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]['ID'] === ID) {
            return i;
        }
    }

    return -1;
}