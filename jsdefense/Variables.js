var canvas;
var context;
var canvasRect;

var mouse = {
    locked : false,
    lx : 0,
    ly : 0,
    rx : 0,
    ry : 0,
};

var game = {
    scene : 'Title',
};

var shop = {
    level : 0,
    upgrades : 0,
    itemPool : [],
    itemList : [],

    rerollCost : 2,
    upgradeCost : [0, [6, 6, 6], [8, 8, 8], [10, 10, 10], [12, 12, 12]],
    lockCost : 0,
};

var field = {
    terrain : [[101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101],
               [101, 101, 101, 101, 101, 101, 101]],

    player : [],
    enemy : [],
};
