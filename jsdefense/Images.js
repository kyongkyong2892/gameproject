var images = {
    terrain : {
        101 : new Image(),
    },

    obstacles : {
        101 : new Image(),
    },
    
    cards : {
        10001 : new Image(),
        10002 : new Image(),
        10003 : new Image(),
    },
    
    shopLevels : [0, new Image(), new Image(), new Image(), new Image(), new Image()],

    reroll : new Image(),
    upgrade : new Image(),
    locked : new Image(),
    unlocked : new Image(),
};

function imageLoad() {
    images.terrain[101].src = 'Images/Terrain/GrassNormal001.png';
    images.obstacles[101].src = 'Images/Terrain/Rock001.png';

    images.cards[10001].src = 'Images/Cards/Unit10001.png';
    images.cards[10002].src = 'Images/Cards/Unit10002.png';
    images.cards[10003].src = 'Images/Cards/Unit10003.png';
    
    images.shopLevels[1].src = 'Images/ShopLevels/ShopLevel001.png';
    images.shopLevels[2].src = 'Images/ShopLevels/ShopLevel002.png';
    images.shopLevels[3].src = 'Images/ShopLevels/ShopLevel003.png';
    images.shopLevels[4].src = 'Images/ShopLevels/ShopLevel004.png';
    images.shopLevels[5].src = 'Images/ShopLevels/ShopLevel005.png';

    images.reroll.src = 'Images/Reroll.png';
    images.locked.src = 'Images/Locked.png';
    images.unlocked.src = 'Images/Unlocked.png';
    images.upgrade.src = 'Images/Upgrade.png';
}