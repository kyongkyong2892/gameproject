function manageBattle() {
    displayBattle();
}

function displayBattle() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Battle', UI.titleText[0], UI.titleText[1]);

    context.strokeRect(UI.battle.playerHero[0], UI.battle.playerHero[1], UI.battle.playerHero[2], UI.battle.playerHero[3]);
    context.strokeRect(UI.battle.enemyHero[0], UI.battle.enemyHero[1], UI.battle.enemyHero[2], UI.battle.enemyHero[3]);

    for (var i = 0; i < 8; i++) {
        context.strokeRect(UI.battle.playerUnitList[i][0], UI.battle.playerUnitList[i][1], UI.cellSizeM[0], UI.cellSizeM[1]);
        context.strokeRect(UI.battle.enemyUnitList[i][0], UI.battle.enemyUnitList[i][1], UI.cellSizeM[0], UI.cellSizeM[1]);
    }
}

function lMouseUpBattle() {
}

function rMouseUpBattle() {
}

function keyDownBattle() {
}

function keyUpBattle() {
}
