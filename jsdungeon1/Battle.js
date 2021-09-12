function manageBattle() {
    displayBattle();
}

function displayBattle() {
    context.font = '60px Verdana';
    context.lineWidth = 2;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    context.clearRect(UI.full[0], UI.full[1], UI.full[2], UI.full[3]);

    context.fillText('Battle', UI.titleText[0], UI.titleText[1]);

    context.strokeRect(UI.battle.descriptionBox[0], UI.battle.descriptionBox[1], UI.battle.descriptionBox[2], UI.battle.descriptionBox[3]);

    // Field
    context.strokeRect(UI.battle.playerHero[0], UI.battle.playerHero[1], UI.battle.playerHero[2], UI.battle.playerHero[3]);
    context.strokeRect(UI.battle.enemyHero[0], UI.battle.enemyHero[1], UI.battle.enemyHero[2], UI.battle.enemyHero[3]);

    context.font = '14px Verdana';
    
    for (var i = 0; i < 6; i++) {
        context.strokeRect(UI.battle.playerUnitList[i][0], UI.battle.playerUnitList[i][1], UI.cellSizeM[0], UI.cellSizeM[1]);
        context.strokeRect(UI.battle.enemyUnitList[i][0], UI.battle.enemyUnitList[i][1], UI.cellSizeM[0], UI.cellSizeM[1]);
    }

    for (var i = 0; i < battle.field.length; i++) {
        if (battle.field[i]['Type'] === 'Hero') {
            if (battle.field[i]['Side'] === 0) {
                context.drawImage(images.heroes[1001], UI.battle.playerHeroImage[0], UI.battle.playerHeroImage[1]);
                context.fillStyle = 'yellow';
                context.fillRect(UI.battle.playerHeroImage[0] + UI.statCell[0], UI.battle.playerHeroImage[1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
                context.fillStyle = 'black';
                context.fillText(`${battle.field[i]['Stat'][0]}/${battle.field[i]['Stat'][1]}`, UI.battle.playerHeroImage[0] + UI.statText[0], UI.battle.playerHeroImage[1] + UI.statText[1]);
            } else {
                context.drawImage(images.heroes[2001], UI.battle.enemyHeroImage[0], UI.battle.enemyHeroImage[1]);
                context.fillStyle = 'yellow';
                context.fillRect(UI.battle.enemyHeroImage[0] + UI.statCell[0], UI.battle.enemyHeroImage[1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
                context.fillStyle = 'black';
                context.fillText(`${battle.field[i]['Stat'][0]}/${battle.field[i]['Stat'][1]}`, UI.battle.enemyHeroImage[0] + UI.statText[0], UI.battle.enemyHeroImage[1] + UI.statText[1]);
            }
        } else if (battle.field[i]['Type'] === 'Unit') {
            if (battle.field[i]['Side'] === 0) {
                context.drawImage(images.cards[battle.field[i]['ID']], UI.battle.playerUnitList[battle.field[i]['Position']][0], UI.battle.playerUnitList[battle.field[i]['Position']][1]);
                context.fillStyle = 'yellow';
                context.fillRect(UI.battle.playerUnitList[0] + UI.statCell[0], UI.battle.playerUnitList[1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
                context.fillStyle = 'black';
                context.fillText(`${battle.field[i]['Stat'][0]}/${battle.field[i]['Stat'][1]}`, UI.battle.playerUnitList[0] + UI.statText[0], UI.battle.playerUnitList[1] + UI.statText[1]);
            } else {
                context.drawImage(images.cards[battle.field[i]['ID']], UI.battle.enemyUnitList[battle.field[i]['Position']][0], UI.battle.enmeyUnitList[battle.field[i]['Position']][1]);
                context.fillStyle = 'yellow';
                context.fillRect(UI.battle.enemyUnitList[0] + UI.statCell[0], UI.battle.enemyUnitList[1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
                context.fillStyle = 'black';
                context.fillText(`${battle.field[i]['Stat'][0]}/${battle.field[i]['Stat'][1]}`, UI.battle.enemyUnitList[0] + UI.statText[0], UI.battle.enemyUnitList[1] + UI.statText[1]);
            }
        }
    }

    // Lower Bar
    context.strokeRect(UI.battle.heroSkill[0], UI.battle.heroSkill[1], UI.battle.heroSkill[2], UI.battle.heroSkill[3]);

    // // Hand
    context.strokeRect(UI.battle.hand[0], UI.battle.hand[1], UI.battle.hand[2], UI.battle.hand[3]);
    
    for (var i = 0; i < player.hand.length; i++) {
        context.drawImage(images.cards[player.hand[i]['ID']], UI.battle.hand[0] + UI.cellSizeM[0] * i, UI.battle.hand[1]);

        context.fillStyle = 'yellow';
        context.fillRect(UI.battle.hand[0] + UI.cellSizeM[0] * i + UI.energyCell[0], UI.battle.hand[1] + UI.energyCell[1], UI.energyCell[2], UI.energyCell[3]);
        context.fillStyle = 'black';
        context.fillText(`${player.hand[i]['Energy']}`, UI.battle.hand[0] + UI.cellSizeM[0] * i + UI.energyText[0], UI.battle.hand[1] + UI.energyText[1]);

        if (player.hand[i]['Type'] === 'Unit') {
            context.fillStyle = 'yellow';
            context.fillRect(UI.battle.hand[0] + UI.cellSizeM[0] * i + UI.statCell[0], UI.battle.hand[1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
            context.fillStyle = 'black';
            context.fillText(`${player.hand[i]['Stat'][0]}/${player.hand[i]['Stat'][1]}`, UI.battle.hand[0] + UI.cellSizeM[0] * i + UI.statText[0], UI.battle.hand[1] + UI.statText[1]);
        }
    }

    context.strokeRect(UI.battle.cardBack[0], UI.battle.cardBack[1], UI.battle.cardBack[2], UI.battle.cardBack[3]);

    // Button
    context.strokeRect(UI.battle.cardButton[0], UI.battle.cardButton[1], UI.battle.cardButton[2], UI.battle.cardButton[3]);
    context.strokeRect(UI.battle.itemButton[0], UI.battle.itemButton[1], UI.battle.itemButton[2], UI.battle.itemButton[3]);
    context.strokeRect(UI.battle.equipButton[0], UI.battle.equipButton[1], UI.battle.equipButton[2], UI.battle.equipButton[3]);
    context.strokeRect(UI.battle.infoButton[0], UI.battle.infoButton[1], UI.battle.infoButton[2], UI.battle.infoButton[3]);
    context.strokeRect(UI.battle.runButton[0], UI.battle.runButton[1], UI.battle.runButton[2], UI.battle.runButton[3]);
    context.strokeRect(UI.battle.cancelButton[0], UI.battle.cancelButton[1], UI.battle.cancelButton[2], UI.battle.cancelButton[3]);

    // Status
    context.strokeRect(UI.battle.statusBox[0], UI.battle.statusBox[1], UI.battle.statusBox[2], UI.battle.statusBox[3]);
    
    for (var i = 0; i < 8; i++) {
        if (i < player.energy) {
            context.drawImage(images.energyOrbFull, UI.battle.energyOrb[0] + UI.cellSizeS[0] * i, UI.battle.energyOrb[1]);
        } else if (i < player.energyMax) {
            context.drawImage(images.energyOrbEmpty, UI.battle.energyOrb[0] + UI.cellSizeS[0] * i, UI.battle.energyOrb[1]);
        } else {
            context.drawImage(images.energyOrbVoid, UI.battle.energyOrb[0] + UI.cellSizeS[0] * i, UI.battle.energyOrb[1]);
        }
    }

    if (game.state === 'Start' || game.state === 'StartConfirm') {
        context.fillStyle = 'white';
        context.font = '14px Verdana';
        
        context.fillRect(UI.battle.startWindow.rect[0], UI.battle.startWindow.rect[1], UI.battle.startWindow.rect[2], UI.battle.startWindow.rect[3]);
        context.strokeRect(UI.battle.startWindow.rect[0], UI.battle.startWindow.rect[1], UI.battle.startWindow.rect[2], UI.battle.startWindow.rect[3]);

        context.strokeRect(UI.battle.startWindow.descriptionBox[0], UI.battle.startWindow.descriptionBox[1], UI.battle.startWindow.descriptionBox[2], UI.battle.startWindow.descriptionBox[3]);

        for (var i = 0; i < 3; i++) {
            context.drawImage(images.cards[player.deck[i]['ID']], UI.battle.startWindow.startCards[i][0], UI.battle.startWindow.startCards[i][1]);
            context.strokeRect(UI.battle.startWindow.startCards[i][0], UI.battle.startWindow.startCards[i][1], UI.battle.startWindow.startCards[i][2], UI.battle.startWindow.startCards[i][3]);
            
            if (player.startHandChange[i] === true && game.state === 'Start') {
                context.drawImage(images.selectFrame, UI.battle.startWindow.startCards[i][0], UI.battle.startWindow.startCards[i][1]);
            }
            
            context.fillStyle = 'yellow';
            context.fillRect(UI.battle.startWindow.startCards[i][0] + UI.energyCell[0], UI.battle.startWindow.startCards[i][1] + UI.energyCell[1], UI.energyCell[2], UI.energyCell[3]);
            context.fillStyle = 'black';
            context.fillText(`${player.deck[i]['Energy']}`, UI.battle.startWindow.startCards[i][0] + UI.energyText[0], UI.battle.startWindow.startCards[i][1] + UI.energyText[1]);
            
            if (player.deck[i]['Type'] === 'Unit') {
                context.fillStyle = 'yellow';
                context.fillRect(UI.battle.startWindow.startCards[i][0] + UI.statCell[0], UI.battle.startWindow.startCards[i][1] + UI.statCell[1], UI.statCell[2], UI.statCell[3]);
                context.fillStyle = 'black';
                context.fillText(`${player.deck[i]['Stat'][0]}/${player.deck[i]['Stat'][1]}`, UI.battle.startWindow.startCards[i][0] + UI.statText[0], UI.battle.startWindow.startCards[i][1] + UI.statText[1]);
            }
        }

        context.drawImage(images.startButton, UI.battle.startWindow.startButton[0], UI.battle.startWindow.startButton[1]);
        context.strokeRect(UI.battle.startWindow.startButton[0], UI.battle.startWindow.startButton[1], UI.battle.startWindow.startButton[2], UI.battle.startWindow.startButton[3]);
    }
}

function lMouseUpBattle() {
    if (game.state === 'Start') {
        for (var i = 0; i < 3; i++) {
            if (pointInsideRect(mouse.lx, mouse.ly, UI.battle.startWindow.startCards[i][0], UI.battle.startWindow.startCards[i][1], UI.battle.startWindow.startCards[i][2], UI.battle.startWindow.startCards[i][3])) {
                if (player.startHandChange[i] === true) {
                    player.startHandChange[i] = false;
                } else {
                    player.startHandChange[i] = true;
                }
            }
        }
        
        if (pointInsideRect(mouse.lx, mouse.ly, UI.battle.startWindow.startButton[0], UI.battle.startWindow.startButton[1], UI.battle.startWindow.startButton[2], UI.battle.startWindow.startButton[3])) {
            startHandChange();
            game.state = 'StartConfirm';
        }
    } else if (game.state === 'StartConfirm') {
        if (pointInsideRect(mouse.lx, mouse.ly, UI.battle.startWindow.startButton[0], UI.battle.startWindow.startButton[1], UI.battle.startWindow.startButton[2], UI.battle.startWindow.startButton[3])) {
            game.state = 'YourTurn';
            gameStart();
            firstTurnStart();
        }
    } else if (game.state === 'YourTurn') {
        if (game.click === 'None') {
            for (var i = 0; i < player.hand.length; i++) {
                if (pointInsideRect(mouse.lx, mouse.ly, UI.battle.hand[0] + UI.cellSizeM[0] * i, UI.battle.hand[1], UI.cellSizeM[0], UI.cellSizeM[1])) {
                    game.click = 'ClickedCard';
                    player.selectedHand = i;
                }
            }
        }
    }
}

function rMouseUpBattle() {
}

function keyDownBattle() {
}

function keyUpBattle() {
}
