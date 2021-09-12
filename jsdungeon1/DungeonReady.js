function manageDungeonReady() {
    displayDungeonReady();
}

function displayDungeonReady() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.fillStyle = 'black';    

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Ready', UI.titleText[0], UI.titleText[1]);

    // Select Sections
    context.drawImage(images.leftButton, UI.dungeonReady.leftHeroButton[0],  UI.dungeonReady.leftHeroButton[1]);
    context.strokeRect(UI.dungeonReady.leftHeroButton[0], UI.dungeonReady.leftHeroButton[1], UI.dungeonReady.leftHeroButton[2], UI.dungeonReady.leftHeroButton[3]);
    context.drawImage(images.rightButton, UI.dungeonReady.rightHeroButton[0],  UI.dungeonReady.rightHeroButton[1]);
    context.strokeRect(UI.dungeonReady.rightHeroButton[0], UI.dungeonReady.rightHeroButton[1], UI.dungeonReady.rightHeroButton[2], UI.dungeonReady.rightHeroButton[3]);
    context.drawImage(images.leftButton, UI.dungeonReady.leftDeckButton[0],  UI.dungeonReady.leftDeckButton[1]);
    context.strokeRect(UI.dungeonReady.leftDeckButton[0], UI.dungeonReady.leftDeckButton[1], UI.dungeonReady.rightDeckButton[2], UI.dungeonReady.rightDeckButton[3]);
    context.drawImage(images.rightButton, UI.dungeonReady.rightDeckButton[0],  UI.dungeonReady.rightDeckButton[1]);
    context.strokeRect(UI.dungeonReady.rightDeckButton[0], UI.dungeonReady.rightDeckButton[1], UI.dungeonReady.rightDeckButton[2], UI.dungeonReady.rightDeckButton[3]);

    // Start Button
    context.drawImage(images.startButton, UI.dungeonReady.startButton[0], UI.dungeonReady.startButton[1]);
    context.strokeRect(UI.dungeonReady.startButton[0], UI.dungeonReady.startButton[1], UI.dungeonReady.startButton[2], UI.dungeonReady.startButton[3]);

    for (var i = 0; i < 4; i++) {
        context.strokeRect(UI.dungeonReady.heroList[i][0], UI.dungeonReady.heroList[i][1], UI.dungeonReady.heroList[i][2], UI.dungeonReady.heroList[i][3]);

        if (dungeonSelect.heroLocked[i] === true) {
            context.drawImage(images.locked, UI.dungeonReady.heroList[i][0], UI.dungeonReady.heroList[i][1]);
        } else {
            context.drawImage(images.heroes[dungeonSelect.heroList[i]], UI.dungeonReady.heroList[i][0], UI.dungeonReady.heroList[i][1]);
        }

        context.strokeRect(UI.dungeonReady.deckList[i][0], UI.dungeonReady.deckList[i][1], UI.dungeonReady.deckList[i][2], UI.dungeonReady.deckList[i][3]);

        if (dungeonSelect.deckLocked[i] === true) {
            context.drawImage(images.locked, UI.dungeonReady.deckList[i][0], UI.dungeonReady.deckList[i][1]);
        } else {
            context.drawImage(images.decks[dungeonSelect.deckList[i]], UI.dungeonReady.deckList[i][0], UI.dungeonReady.deckList[i][1]);
        }
    }
}

function lMouseUpDungeonReady() {
    if (pointInsideRect(mouse.lx, mouse.ly, UI.dungeonReady.startButton[0], UI.dungeonReady.startButton[1], UI.dungeonReady.startButton[2], UI.dungeonReady.startButton[3])) {
        game.scene = 'DungeonMap';
        dungeonStart(1, 1, 1);
    }
}

function rMouseUpDungeonReady() {
}
