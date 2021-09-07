var images = {
    terrain : {
        101 : new Image(),
    },

    obstacles : {
        101 : new Image(),
    },

    reroll : new Image(),
    upgrade : new Image(),
    locked : new Image(),
    unlocked : new Image(),
};

function imageLoad() {
    images.terrain[101].src = 'Images/Terrain/GrassNormal001.png';
    images.obstacles[101].src = 'Images/Terrain/Rock001.png';

    images.reroll.src = 'Images/Reroll.png';
    images.locked.src = 'Images/Locked.png';
    images.unlocked.src = 'Images/Unlocked.png';
    images.upgrade.src = 'Images/Upgrade.png';
}