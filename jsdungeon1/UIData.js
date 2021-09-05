var UI = {
    full : [0, 0, 1024, 576],
    titleText : [96, 96],
    backButton : [32, 32, 96, 96],
    cellSizeM : [64, 64],

    portrait : [32, 416, 128, 128],
    dialogue : [160, 416, 768, 128],

    menu : {
        newGameButton : [128, 128, 384, 64],
        newGameText : [132, 176],
        loadGameButton : [128, 256, 384, 64],
        loadGameText : [132, 304],
        dungeonButton : [128, 384, 384, 64],
        dungeonText : [132, 432],
    },

    dungeonReady : {
        leftHeroButton : [32, 160, 64, 64],
        rightHeroButton : [512, 160, 64, 64],
        heroList : [[128, 160, 64, 64], [224, 160, 64, 64], [320, 160, 64, 64], [416, 160, 64, 64]],
        leftDeckButton : [32, 288, 64, 64],
        rightDeckButton : [512, 288, 64, 64],
        deckList : [[128, 288, 64, 64], [224, 288, 64, 64], [320, 288, 64, 64], [416, 288, 64, 64]],

        startButton : [864, 480, 128, 64],
    },

    dungeonMap : {
        cells : [384, 128],
        cellInterval : [96, 96],
    },

    field : { 
    },

    battle : {
        descriptionBox : [32, 128, 320, 128],

        playerUnitList : [[640, 128], [640, 192], [640, 256], [640, 320], [576, 128], [576, 192], [576, 256], [576, 320]],
        enemyUnitList : [[704, 128], [704, 192], [704, 256], [704, 320], [768, 128], [768, 192], [768, 256], [768, 320]],
        playerHero : [512, 128, 64, 256],
        playerHeroImage : [512, 224, 64, 64], 
        enemyHero : [832, 128, 64, 256],
        enemyHeroImage : [832, 224, 64, 256],

        heroSkill : [32, 480, 64, 64],

        hand : [128, 480, 640, 64],
        cardBack : [768, 480, 64, 64],

        cardButton : [128, 416, 64, 64],
        itemButton : [192, 416, 64, 64],
        equipButton : [256, 416, 64, 64],
        infoButton : [320, 416, 64, 64],
        runButton : [384, 416, 64, 64],
        
        statusBox : [448, 416, 320, 64],
    },
};
