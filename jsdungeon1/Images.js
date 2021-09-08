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
        1001 : new Image(),
        1002 : new Image(),
        1003 : new Image(),
        2001 : new Image(),
        2002 : new Image(),
        2003 : new Image(),
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

    images.cards[1001].src = 'Images/Cards/Card1001.png';
    images.cards[1002].src = 'Images/Cards/Card1002.png';
    images.cards[1003].src = 'Images/Cards/Card1003.png';
    images.cards[2001].src = 'Images/Cards/Card2001.png';
    images.cards[2002].src = 'Images/Cards/Card2002.png';
    images.cards[2003].src = 'Images/Cards/Card2003.png';

    images.unlocked.src = 'Images/Unlocked.png';
    images.locked.src = 'Images/Locked.png';
    images.warp.src = 'Images/Warp.png';
}