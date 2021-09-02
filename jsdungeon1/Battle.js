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

    context.strokeRect(UI.battle.heroSkill[0], UI.battle.heroSkill[1], UI.battle.heroSkill[2], UI.battle.heroSkill[3]);

    context.strokeRect(UI.battle.hand[0], UI.battle.hand[1], UI.battle.hand[2], UI.battle.hand[3]);
    context.strokeRect(UI.battle.cardBack[0], UI.battle.cardBack[1], UI.battle.cardBack[2], UI.battle.cardBack[3]);

    context.strokeRect(UI.battle.cardButton[0], UI.battle.cardButton[1], UI.battle.cardButton[2], UI.battle.cardButton[3]);
    context.strokeRect(UI.battle.itemButton[0], UI.battle.itemButton[1], UI.battle.itemButton[2], UI.battle.itemButton[3]);
    context.strokeRect(UI.battle.equipButton[0], UI.battle.equipButton[1], UI.battle.equipButton[2], UI.battle.equipButton[3]);
}

function lMouseUpBattle() {
}

function rMouseUpBattle() {
}

function keyDownBattle() {
}

function keyUpBattle() {
}
