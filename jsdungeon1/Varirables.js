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

var player = {
};

var field = {
    terrain : [],
    walls : [],
    objects : [],
};

var battle = {
    field : [],
};
