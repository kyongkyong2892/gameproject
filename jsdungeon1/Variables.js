var canvas;
var context;
var canvasRect;

var game = {
    scene : 'Title',
};

var mouse = {
    locked : false,
    buttonType : 0,
    
    lx : 0,
    ly : 0,
    rx : 0,
    ry : 0,
};

var keyboard = {
    locked : false,

    keys : 0,
    pressedKeys : {'w' : false, 'a' : false, 's' : false, 'd' : false},
};

var camera = {
    x : 0,
    y : 0,
}

var player = {
};

var dungeonMap = {
    floor : 1,
    playerColumn : 0,
    cells : [[0, 2, 2, 2, 2, 0],
             [1, 2, 2, 2, 2, 6],
             [0, 2, 2, 2, 2, 0]],
};

var field = {
    place : 'Home',
    terrain : [],
    structure : [],
    objects : [],
};

var battle = {
    field : [],
};
