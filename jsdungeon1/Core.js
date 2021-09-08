window.onload = start;
window.onerror = errorHandle;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp, false);
    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyup', keyUp, false);

    imageLoad();

    setInterval(update, 30);
}

function errorHandle(e1, e2, e3) {
    alert(`${e1} ${e2} ${e3}`);
}

function update() {
    if (game.scene === 'Title') {
        manageTitle();
    } else if (game.scene === 'Menu') {
        manageMenu();
    } else if (game.scene === 'Field') {
        manageField();
    } else if (game.scene === 'DungeonReady') {
        manageDungeonReady();
    } else if (game.scene === 'DungeonMap') {
        manageDungeonMap();
    } else if (game.scene === 'Battle') {
        manageBattle();
    }
}

function mouseUp(event) {
    if (mouse.locked === false) {
        if (event.button === 0) {
            mouse.buttonType = 0;
            mouse.lx = event.clientX - canvasRect.left;
            mouse.ly = event.clientY - canvasRect.top;
        
            if (game.scene === 'Title') {
                lMouseUpTitle();
            } else if (game.scene === 'Menu') {
                lMouseUpMenu();
            } else if (game.scene === 'DungeonReady') {
                lMouseUpDungeonReady();
            } else if (game.scene === 'DungeonMap') {
                lMouseUpDungeonMap();
            }
        } else if (event.button === 2) {
            mouse.buttonType = 2;
            mouse.rx = event.clientX - canvasRect.left;
            mouse.ry = event.clientY - canvasRect.top;

            if (game.scene === 'Title') {
                rMouseUpTitle();
            } else if (game.scene === 'Menu') {
                rMouseUpMenu();
            }
        }
    }
}

function keyDown(event) {
    if (event.keyCode === 64 + 23) {
        keyboard.pressedKeys['w'] = true;
    }

    if (event.keyCode === 64 + 1) {
        keyboard.pressedKeys['a'] = true;
    }
    
    if (event.keyCode === 64 + 19) {
        keyboard.pressedKeys['s'] = true;
    }

    if (event.keyCode === 64 + 4) {
        keyboard.pressedKeys['d'] = true;
    }
}

function keyUp(event) {
    if (event.keyCode === 64 + 23) {
        keyboard.pressedKeys['w'] = false;
    }

    if (event.keyCode === 64 + 1) {
        keyboard.pressedKeys['a'] = false;
    }
    
    if (event.keyCode === 64 + 19) {
        keyboard.pressedKeys['s'] = false;
    }

    if (event.keyCode === 64 + 4) {
        keyboard.pressedKeys['d'] = false;
    }

    keyboard.key = event.keyCode;

    if (game.scene === 'Field') {
        keyUpField();
    }
}
