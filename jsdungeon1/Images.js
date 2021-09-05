var images = {
    field : {
        terrain : {
            201 : new Image(),
        },

        structure : {
            201 : new Image(),
        },
    },

    unlocked : new Image(),
    locked : new Image(),
};

function imageLoad() {
    images.field.terrain[201].src = 'Images/Terrain/StoneFloor001.png';
    images.field.structure[201].src = 'Images/Terrain/StoneWall001.png';

    images.unlocked.src = 'Images/Unlocked.png';
    images.locked.src = 'Images/Locked.png';
}
