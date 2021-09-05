function manageBattleExtra() {
    displayBattleExtra();
}

function displayBattleExtra() {
    context.font = '60px Verdana';
    context.linewWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.strokeRect(UI.backButton[0], UI.backButton[1], UI.backButton[2], UI.backButton[3]);

    // Shop
    context.strokeRect(UI.battleExtra.levelIcon[0], UI.battleExtra.levelIcon[1], UI.battleExtra.levelIcon[2], UI.battleExtra.levelIcon[3]);
    context.strokeRect(UI.battleExtra.shop[0], UI.battleExtra.shop[1], UI.battleExtra.shop[2], UI.battleExtra.shop[3]);
    context.strokeRect(UI.battleExtra.levelUpButton[0], UI.battleExtra.levelUpButton[1], UI.battleExtra.levelUpButton[2], UI.battleExtra.levelUpButton[3]);
    context.strokeRect(UI.battleExtra.rerollButton[0], UI.battleExtra.rerollButton[1], UI.battleExtra.rerollButton[2], UI.battleExtra.rerollButton[3]);
    context.strokeRect(UI.battleExtra.lockButton[0], UI.battleExtra.lockButton[1], UI.battleExtra.lockButton[2], UI.battleExtra.lockButton[3]);

    // Field
    for (var i = 0; i < field.terrain.length; i++) {
        for (var j = 0; j < field.terrain[0].length; j++) {
            context.drawImage(images.terrain[field.terrain[i][j]], UI.battleExtra.field[0] + UI.cellSizeM[0] * j, UI.battleExtra.field[1] + UI.cellSizeM[1] * i);                     context.strokeRect(UI.battleExtra.field[0] + UI.cellSizeM[0] * j, UI.battleExtra.field[1] + UI.cellSizeM[1] * i, UI.cellSizeM[0], UI.cellSizeM[1]);
        }
    }

    // hand
    context.strokeRect(UI.battleExtra.handSection[0], UI.battleExtra.handSection[1], UI.battleExtra.handSection[2], UI.battleExtra.handSection[3]);
    context.strokeRect(UI.battleExtra.itemSection[0], UI.battleExtra.itemSection[1], UI.battleExtra.itemSection[2], UI.battleExtra.itemSection[3]);
}

function mouseClickBattleExtra() {
}
