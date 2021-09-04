function manageTitle() {
    displayTitle();
}

function displayTitle() {
    context.font = '60px Verdana';
    context.linewWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Defense', UI.titleText[0], UI.titleText[1]);
}

function mouseClickTitle() {
    game.scene = 'Menu';
}