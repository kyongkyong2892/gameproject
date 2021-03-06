var canvas;
var context;
var canvasRect;

var game = {
    scene : 'Title',
    state : 'Start',
    click : 'None',
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

    key : 0,
    pressedKeys : {'w' : false, 'a' : false, 's' : false, 'd' : false},
};

var camera = {
    x : 0,
    y : 0,

    playerRelx : 0,
    playerRely : 0,
}

var playerField = {
    life : 20,

    equipments : [],
    items : [],

    cards : [],

    deck1 : [],
    deck2 : [],
    deck3 : [],
};

var playerDungeon = {
    life : 20,

    items : [],
    deck : [],
};

var player = {   
    energy : 1,
    energyMax : 1,

    startHandChange : [false, false, false],
    hand : [],
    deck : [],

    selectedHand : -1,
    availableCells : [],
    card1Input : [],
};

var dungeonSelect = {
    heroList : [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
    heroLocked : [false, true, true, true, true, true, true, true],
    deckList : [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
    deckLocked : [false, true, true, true, true, true, true, true],
    selectedHero : -1,
    selectedDeck : -1,
}

var dungeonMap = {
    floor : 1,
    playerColumn : 0,
    cells : [[0, 2, 2, 2, 2, 0],
             [1, 2, 2, 2, 2, 6],
             [0, 2, 2, 2, 2, 0]],
};

var field = {
    place : 'Home',
    placeConnection : [],

    playerPosition : [2, 2],
    playerDirection : 'S',
    playerFace : 'Front',
    playerMoveTick : 0,

    terrain : [],
    floor : [],
    objects : [],
};

var battle = {
    turn : 0,
    field : [],
    fieldUnits : [[false, false, false, false, false, false], [false, false, false, false, false, false]],
};
