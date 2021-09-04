function manageMenu() {
    displayMenu();
}

function displayMenu() {
    context.font = '60px Verdana';
    context.linewWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Menu', UI.titleText[0], UI.titleText[1]);

    context.strokeRect(UI.menu.adventureButton[0], UI.menu.adventureButton[1], UI.menu.adventureButton[2], UI.menu.adventureButton[3]);
    context.strokeRect(UI.menu.extraButton[0], UI.menu.extraButton[1], UI.menu.extraButton[2], UI.menu.extraButton[3]);
}

function mouseClickMenu() {
    if (pointInsideRect(mouse.lx, mouse.ly, UI.menu.adventureButton[0], UI.menu.adventureButton[1], UI.menu.adventureButton[2], UI.menu.adventureButton[3])) {
        game.scene = 'LevelSelect';
    } else if (pointInsideRect(mouse.lx, mouse.ly, UI.menu.extraButton[0], UI.menu.extraButton[1], UI.menu.extraButton[2], UI.menu.extraButton[3])) {
        game.scene = 'Map';
    }
}