function manageTitle() {
    displayTitle();
}

function displayTitle() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Adventure', UI.titleText[0], UI.titleText[1]);
}

function lMouseUpTitle() {
    game.scene = 'Menu';
}

function rMouseUpTitle() {
}
