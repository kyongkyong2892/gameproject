var images = {
    field : {
        terrain : {
            101 : new Image(),
            111 : new Image(),
            201 : new Image(),
            211 : new Image(),
        },

        objects : {
            1001 : new Image(),
            2001 : new Image(),
        },
    },

    characters : {
        player : {
            'Front' : new Image(),
            'Back' : new Image(),
            'Left' : new Image(),
            'Right' : new Image(),
        },
    },

    heroes : {
        1001 : new Image(),
        2001 : new Image(),
    },

    decks : {
        1001 : new Image(),  
    },

    cards : {
        10001 : new Image(),
        10002 : new Image(),
        10003 : new Image(),
        10004 : new Image(),
        10005 : new Image(),
        10006 : new Image(),
        10007 : new Image(),
        20001 : new Image(),
        20002 : new Image(),
        20003 : new Image(),
    },
    
    cardBacks : {
        1 : new Image(),
    },

    leftButton : new Image(),
    rightButton : new Image(),
    startButton : new Image(),
    cancelButton : new Image(),
    battle : new Image(),
    flag : new Image(),

    unlocked : new Image(),
    locked : new Image(),
    warp : new Image(),
    selectFrame : new Image(),
    canMove : new Image(),

    energyOrbFull : new Image(),
    energyOrbEmpty : new Image(),
    energyOrbVoid : new Image(),
};

function imageLoad() {
    images.field.terrain[101].src = 'Images/Terrain/GrassNormal001.png';
    images.field.terrain[111].src = 'Images/Terrain/GrassPath001.png';
    images.field.terrain[201].src = 'Images/Terrain/StoneFloor001.png';
    images.field.terrain[211].src = 'Images/Terrain/StoneWall001.png';

    images.characters.player['Front'].src = 'Images/Characters/PlayerFront001.png';
    images.characters.player['Back'].src = 'Images/Characters/PlayerBack001.png';
    images.characters.player['Left'].src = 'Images/Characters/PlayerLeft001.png';
    images.characters.player['Right'].src = 'Images/Characters/PlayerRight001.png';

    images.field.objects[1001].src = 'Images/Objects/ID1001_PlayerHome.png';
    images.field.objects[2001].src = 'Images/Objects/ID2001_Dummy.png';

    images.heroes[1001].src = 'Images/Heroes/Hero1001.png';
    images.heroes[2001].src = 'Images/Heroes/Hero2001.png';

    images.decks[1001].src = 'Images/Decks/Deck1001.png';

    images.cards[10001].src = 'Images/Cards/Card10001.png';
    images.cards[10002].src = 'Images/Cards/Card10002.png';
    images.cards[10003].src = 'Images/Cards/Card10003.png';
    images.cards[10004].src = 'Images/Cards/Card10004.png';
    images.cards[10005].src = 'Images/Cards/Card10005.png';
    images.cards[10006].src = 'Images/Cards/Card10006.png';
    images.cards[10007].src = 'Images/Cards/Card10007.png';
    images.cards[20001].src = 'Images/Cards/Card20001.png';
    images.cards[20002].src = 'Images/Cards/Card20002.png';
    images.cards[20003].src = 'Images/Cards/Card20003.png';
    
    images.cardBacks[1].src = 'Images/CardBacks/CardBack001.png';

    images.leftButton.src = 'Images/LeftButton.png';
    images.rightButton.src = 'Images/RightButton.png';
    images.startButton.src = 'Images/StartButton.png';
    images.flag.src = 'Images/Flag.png';
    images.battle.src = 'Images/Battle.png';

    images.unlocked.src = 'Images/Unlocked.png';
    images.locked.src = 'Images/Locked.png';
    images.warp.src = 'Images/Warp.png';
    images.selectFrame.src = 'Images/SelectFrame.png';
    images.canMove.src = 'Images/CanMove.png';

    images.energyOrbEmpty.src = 'Images/EnergyOrbEmpty.png';
    images.energyOrbFull.src = 'Images/EnergyOrbFull.png';
    images.energyOrbVoid.src = 'Images/EnergyOrbVoid.png';
}