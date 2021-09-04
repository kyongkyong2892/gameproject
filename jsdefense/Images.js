var images = {
    terrain : {
        101 : new Image(),
    },

    obstacles : {
        101 : new Image(),
    },
};

function imageLoad() {
    images.terrain[101].src = 'Images/Terrain/GrassNormal001.png';
    images.obstacles[101].src = 'Images/Terrain/Rock001.png';
}