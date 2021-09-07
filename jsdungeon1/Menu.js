function manageMenu() {
    displayMenu();
}

function displayMenu() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Menu', UI.titleText[0], UI.titleText[1]);

    context.font = '48px Verdana';
    context.strokeRect(UI.menu.newGameButton[0], UI.menu.newGameButton[1], UI.menu.newGameButton[2], UI.menu.newGameButton[3]);
    context.fillText('New Game', UI.menu.newGameText[0], UI.menu.newGameText[1]);
    context.strokeRect(UI.menu.loadGameButton[0], UI.menu.loadGameButton[1], UI.menu.loadGameButton[2], UI.menu.loadGameButton[3]);
    context.fillText('Load Game', UI.menu.loadGameText[0], UI.menu.loadGameText[1]);
    context.strokeRect(UI.menu.dungeonButton[0], UI.menu.dungeonButton[1], UI.menu.dungeonButton[2], UI.menu.dungeonButton[3]);
    context.fillText('Dungeon', UI.menu.dungeonText[0], UI.menu.dungeonText[1]);
}

function lMouseUpMenu() {
    if (pointInsideRect(mouse.lx, mouse.ly, UI.menu.dungeonButton[0], UI.menu.dungeonButton[1], UI.menu.dungeonButton[2], UI.menu.dungeonButton[3])) { 
        game.scene = 'DungeonReady';
    } else if (pointInsideRect(mouse.lx, mouse.ly, UI.menu.newGameButton[0], UI.menu.newGameButton[1], UI.menu.newGameButton[2], UI.menu.newGameButton[3])) {
        game.scene = 'Field';
        camera.x = -320;
        camera.y = -64;
        field.place = 'Home';
        generateField('Home');
    }
}

function rMouseUpMenu() {
}
