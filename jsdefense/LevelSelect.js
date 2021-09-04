function manageLevelSelect() {
    displayLevelSelect();
}

function displayLevelSelect() {
    context.font = '60px Verdana';
    context.linewWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Level Select', UI.titleText[0], UI.titleText[1]);

    for (var i = 0; i < 6; i++) {
        context.strokeRect(UI.levelSelect.levels[i][0], UI.levelSelect.levels[i][1], UI.levelSelect.levels[i][2], UI.levelSelect.levels[i][3]);
    }
}

function mouseClickLevelSelect() {
    for (var i = 0; i < 6; i++) {
        if (pointInsideRect(mouse.lx, mouse.ly, UI.levelSelect.levels[i][0], UI.levelSelect.levels[i][1], UI.levelSelect.levels[i][2], UI.levelSelect.levels[i][3])) {
            game.scene = 'BattleExtra';
        }
    }
}