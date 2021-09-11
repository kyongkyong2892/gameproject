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
    level : 1,
    upgrades : 0,
    itemPool : [10001, 10002, 10003],
    itemList : [],

    rerollCost : 2,
    upgradeCost : [0, [6, 6, 6], [8, 8, 8], [10, 10, 10], [12, 12, 12]],
    lockCost : 0,
};

var player = {
    gold : 0,
    goldMax : 0,
    
    hand : [],
    skill : [],
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
