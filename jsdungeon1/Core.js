window.onload = start;
window.onerror = errorHandle;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('keydown', keyDown, false);
    canvas.addEventListener('keyup', keyUp, false);

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

function keyDown() {
}

function keyUp() {
}
