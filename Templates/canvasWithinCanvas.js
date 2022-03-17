/* 
 * This is just a suggested template. 
 * Feel free to completely change it if you want.
 * To use this file, change line 11 in index.html
 */

function setup() {
  createCanvas(windowWidth, windowHeight); 
	
  g = createGraphics(width/2, height/2); // change the width and height if you want
}

function draw() {
  // do something with g

  image(g, 0, 0); // change the locations and sizes if you want
  image(g, width/2, 0);
  image(g, 0, height/2);
  image(g, width/2, height/2);
}
