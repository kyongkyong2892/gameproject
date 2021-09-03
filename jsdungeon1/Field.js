function manageField() {
    displayField();
}

function displayField() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    displayTerrain();
    displayStructure();
    displayObjects();
    displayPlayer();
}

function displayTerrain() {
    for (var i = 0; i < field.terrain.length; i++) {
        for (var j = 0; j < field.terrain[0].length; j++) {
            context.drawImage(images.field.terrain[field.terrain[i][j]], UI.cellSizeM[0] * j, UI.cellSizeM[1] * i);
        }
    }
}

function displayStructure() {

}

function displayObjects() {

}

function displayPlayer() {
    
}

function lMouseUpField() {

}