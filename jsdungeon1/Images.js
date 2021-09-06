var images = {
    field : {
        terrain : {
            101 : new Image(),
            111 : new Image(),
            201 : new Image(),
            211 : new Image(),
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

    unlocked : new Image(),
    locked : new Image(),
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

    images.unlocked.src = 'Images/Unlocked.png';
    images.locked.src = 'Images/Locked.png';
}
