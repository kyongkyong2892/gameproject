function manageField() {
    displayField();
    playerMove();
}

function displayField() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    displayTerrain();
    displayObjects();
    displayPlayer();
}

function displayTerrain() {
    for (var i = 0; i < field.terrain.length; i++) {
        for (var j = 0; j < field.terrain[0].length; j++) {
            context.drawImage(images.field.terrain[field.terrain[i][j]], UI.cellSizeM[0] * j - camera.x, UI.cellSizeM[1] * i - camera.y);
        }
    }
}

function displayObjects() {

}

function displayPlayer() {
    context.drawImage(images.characters.player[field.playerFace], UI.cellSizeM[0] * field.playerPosition[1] - camera.x, UI.cellSizeM[1] * field.playerPosition[0] - camera.y);
}

function playerMove() {
    if (field.playerDirection === 'L' && field.playerMoveTick < 8) {
        field.playerPosition[1] -= 0.125;
        field.playerMoveTick += 1;
    }

    if (field.playerDirection === 'R' && field.playerMoveTick < 8) {
        field.playerPosition[1] += 0.125;
        field.playerMoveTick += 1;
    }

    if (field.playerDirection === 'U' && field.playerMoveTick < 8) {
        field.playerPosition[0] -= 0.125;
        field.playerMoveTick += 1;
    }

    if (field.playerDirection === 'D' && field.playerMoveTick < 8) {
        field.playerPosition[0] += 0.125;
        field.playerMoveTick += 1;
    }

    if (field.playerMoveTick >= 8) {
        field.playerMoveTick = 0;
        field.playerDirection = 'S';
        field.playerPosition[0] = Math.round(field.playerPosition[0]);
        field.playerPosition[1] = Math.round(field.playerPosition[1]);
    }

    if (field.playerDirection === 'S') {
        if (keyboard.pressedKeys['w'] === true && field.floor[field.playerPosition[0] - 1][field.playerPosition[1]] < 99) {
            field.playerDirection = 'U';
            field.playerFace = 'Back';
        }

        if (keyboard.pressedKeys['a'] === true && field.floor[field.playerPosition[0]][field.playerPosition[1] - 1] < 99) {
            field.playerDirection = 'L';
            field.playerFace = 'Left';
        }

        if (keyboard.pressedKeys['s'] === true && field.floor[field.playerPosition[0] + 1][field.playerPosition[1]] < 99) {
            field.playerDirection = 'D';
            field.playerFace = 'Front';
        }

        if (keyboard.pressedKeys['d'] === true && field.floor[field.playerPosition[0]][field.playerPosition[1] + 1] < 99) {
            field.playerDirection = 'R';
            field.playerFace = 'Right';
        }
    }
} 

function lMouseUpField() {

}