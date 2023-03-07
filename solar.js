//Made-in-2016-by-Purva
//create canvas
function setup() {
  div.center();
  createCanvas(640, 480);
}

//create variable for moon and background
var moon = -43;
var back = 0;

//create function to draw sun and moon
function draw() {
    noStroke();
  background(25, 25, 25);
  fill(255, 161, 99);
  ellipse(200,200,200,200);
  fill(31, 29, 29);
ellipse(moon,200,198,198);
  //movement of moon
moon+=0.2;
back-=0;
}
