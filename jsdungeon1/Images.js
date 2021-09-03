var images = {
    field : {
        terrain : {
            201 : new Image(),
        },

        structure : {
            201 : new Image(),
        },
    },
};

function imageLoad() {
    images.field.terrain[201].src = 'Images/Terrain/StoneFloor001.png';
    images.field.structure[201].src = 'Images/Terrain/StoneWall001.png';
}