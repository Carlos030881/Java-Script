noStroke();

draw = function() {
    fill(mouseX, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
};

--------------------------------------

noStroke();

draw = function() {
    fill(mouseX, mouseY, 0);
    ellipse(mouseX, mouseY, 10, 10);
};

--------------------------------------

noStroke();

draw = function() {
    fill(mouseX, mouseY, 0);
    rect( mouseX, mouseY, 10, 10);
};

------------------------------------



draw = function() {
    stroke(18, 230, 85);
    fill(mouseX, mouseY, 0);
    rect( mouseX, mouseY, 10, 10);
};
