function manageDungeonMap() {
    displayDungeonMap();
}

function displayDungeonMap() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Map', UI.titleText[0], UI.titleText[2]); 

    for (var i = 0; i < dungeonMap.cells.length; i++) {
        for (var j = 0; j < dungeonMap.cells[0].length; j++) {
            if (dungeonMap.cells[i][j] != 0) {
                context.strokeRect(UI.dungeonMap.cells[0] + UI.dungeonMap.cellInterval[0] * j, UI.dungeonMap.cells[1] + UI.dungeonMap.cellInterval[1] * i, UI.cellSizeM[0], UI.cellSizeM[1]);
                if (j > dungeonMap.playerColumn + 1) {
                    context.drawImage(images.locked, UI.dungeonMap.cells[0] + UI.dungeonMap.cellInterval[0] * j, UI.dungeonMap.cells[1] + UI.dungeonMap.cellInterval[1] * i);
                }
            }
        }
    }
}

function lMouseUpDungeonMap() {
    for (var i = 0; i < dungeonMap.cells.length; i++) {
        for (var j = 0; j < dungeonMap[0].cells.length; j++) {
            if (pointInsideRect(mouse.lx, mouse.ly, UI.dungeonMap.cells[0] + UI.dungeonMap.cellInterval[0] * j, UI.dungeonMap.cells[1] + UI.dungeonMap.cellInterval[1] * i, UI.cellSizeM[0], UI.cellSizeM[1])) {
                if (j === dungeonMap.playerColumn + 1) {
                    game.scene = 'Battle';
                    dungeonBattleStart();
                }
            }
        }
    }
}
