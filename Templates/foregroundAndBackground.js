/* 
 * This is just a suggested template. 
 * Feel free to completely change it if you want.
 */

function setup() {
  createCanvas(windowWidth, windowHeight); // the middle layer
	
  bg = createGraphics(width, height); // the background layer
  fg = createGraphics(width, height); // the foreground layer
}

function draw() {
  bg.clear();
  // do something with bg
  
  clear(); // clears the canvas
  image(bg, 0, 0); // puts the background onto the canvas

  // put something on the canvas

  fg.clear();
  //do something with fg

  image(fg, 0, 0); // puts the foreground onto the canvas
}
