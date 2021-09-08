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

    cards : {
        10001 : new Image(),
        10002 : new Image(),
        10003 : new Image(),
        20001 : new Image(),
        20002 : new Image(),
        20003 : new Image(),
    },

    unlocked : new Image(),
    locked : new Image(),
    warp : new Image(),
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

    images.cards[10001].src = 'Images/Cards/Card10001.png';
    images.cards[10002].src = 'Images/Cards/Card10002.png';
    images.cards[10003].src = 'Images/Cards/Card10003.png';
    images.cards[20001].src = 'Images/Cards/Card20001.png';
    images.cards[20002].src = 'Images/Cards/Card20002.png';
    images.cards[20003].src = 'Images/Cards/Card20003.png';

    images.unlocked.src = 'Images/Unlocked.png';
    images.locked.src = 'Images/Locked.png';
    images.warp.src = 'Images/Warp.png';
}
