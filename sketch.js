//Red=251,Green=29,Blue=206 이쁨
//Red=112,Green=174,Blue=183 이쁨
var r, g, b;
var Y_AXIS = 1;
var X_AXIS = 2;
var speed = [1, 1, 1];
var c1, c2;
var interval = 90;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  r = int(random(255));
  g = int(random(255));
  b = int(random(255));
  //background(r,g,b);
  //c1 = color(r,g,b);
  //c2 = color(b,g,r);
  print('Red=' + r + ',' + 'Green=' + g + ',' + 'Blue=' + b);
}

function draw() {
  c1 = color(r, g, b);
  c2 = color(g, r, b);
  //background(r,g,b);
  r = r + speed[0];
  g = g + speed[1];
  b = b + speed[2];

  setGradient(30, interval*0, 540, 80, c1, c2, Y_AXIS);
  setGradient(30, interval*1, 540, 80, c2, c1, Y_AXIS);

  setGradient(30, interval*2, 540, 80, c1, c2, X_AXIS);
  setGradient(30, interval*3, 540, 80, c2, c1, X_AXIS);
  createP('색을변경하려면아무키나누르세요')
  if (r > 256 || r < 0) {
    //r = random(255);
    //speed[0] = int(random(1,3));
    speed[0] = -speed[0];
  }

  if (g > 256 || g < 0) {
    //speed[1] = int(random(1,3));
    speed[1] = -speed[1];
  }

  if (b > 256 || b < 0) {
    //speed[2] = int(random(1,3));
    speed[2] = -speed[2];
  }
}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == X_AXIS) { // Left to right gradient
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function resetColor() {
  r = int(random(255));
  g = int(random(255));
  b = int(random(255));
  //c1 = color(r,g,b);
  //c2 = color(b,g,r);
  print('Red=' + r + ',' + 'Green=' + g + ',' + 'Blue=' + b);
}

function keyPressed() {
  resetColor();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
