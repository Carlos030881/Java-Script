noStroke();

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 200;

draw = function() {
    background(255, 206, 71);

    fill(191, 0, 255);
    ellipse(x, y, ballWidth, ballHeight);

    x = x + 1;
    y = y - 2;
    ballWidth = ballWidth * 99/100;
    ballHeight = ballHeight *  99/100;
};




//dicas sobre como alterar variáveis (como incrementá-las ou multiplicá-las) com menos código.

noStroke();

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 200;

draw = function() {
    background(255, 206, 71);

    fill(191, 0, 255);
    ellipse(x, y, ballWidth, ballHeight);

    x += 1;
    y -= 2;
    ballWidth *= 99/100;
    ballHeight *= 99/100;
};



noStroke();

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 200;

draw = function() {
    background(255, 206, 71);

    fill(191, 0, 255);
    ellipse(x, y, ballWidth, ballHeight);

    x = x + 1;
    y = y - 2;
    ballWidth = ballWidth * 99/100;
    ballHeight = ballHeight *  99/100;
};