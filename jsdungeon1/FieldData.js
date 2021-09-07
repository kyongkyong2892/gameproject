var terrainData = {
    'Home' : [[211, 211, 211, 211, 211, 211],
              [211, 201, 201, 201, 201, 211],
              [211, 201, 201, 201, 201, 211],
              [211, 201, 201, 201, 201, 211],
              [211, 201, 201, 201, 201, 211],
              [211, 211, 201, 211, 211, 211]],

    'HomeTown' : [[101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 111, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 111, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 111, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 111, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [101, 101, 101, 101, 111, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101],
                  [111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 101, 101]],
};

var floorData = {
    'Home' : [[99, 99, 99, 99, 99, 99],
              [99, 0, 0, 0, 0, 99],
              [99, 0, 0, 0, 0, 99],
              [99, 0, 0, 0, 0, 99],
              [99, 0, 0, 0, 0, 99],
              [99, 99, 0, 99, 99, 99],
              [99, 99, 99, 99, 99, 99]],

    'HomeTown' : [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
};

var connectionData = {
    'Home' : [[[5, 2], 'HomeTown', [5, 4], [0, 0]]],
    'HomeTown' : [[[5, 4], 'Home', [5, 2], [-320, -64]]],
}

var objectData = {
    'Home' : [],

    'HomeTown' : [[2, 3, 1001]]
};

