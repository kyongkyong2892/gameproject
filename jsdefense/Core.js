window.onload = start;

function start(){
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', onMouseClick, false);

    imageLoad();

    setInterval(update, 30);
}

function update() {
    if (game.scene === 'Title') {
        manageTitle();
    } else if (game.scene === 'Menu') {
        manageMenu();
    } else if (game.scene === 'Map') {
        manageMap();
    } else if (game.scene === 'LevelSelect') {
        manageLevelSelect();
    } else if (game.scene === 'BattleExtra') {
        manageBattleExtra();
    }
}

function onMouseClick(event) {
    if (mouse.locked === false) {
        mouse.lx = event.clientX - canvasRect.left;
        mouse.ly = event.clientY - canvasRect.top;
    
        if (game.scene === 'Title') {
            mouseClickTitle();
        } else if (game.scene === 'Menu') {
            mouseClickMenu();
        } else if (game.scene === 'LevelSelect') {
            mouseClickLevelSelect();
        }
    }
}