## Custom Functions in P5.js

### Built-in Functions

A function performs a sequence of steps used to accomplish a task. There are 289 functions that are built-in to P5.js. We can see them all on the [P5.js Reference Page](https://p5js.org/reference/). Here are just a few examples:

*  `setup()` is a function that is used to set up the canvas in its initial state 
*  `ellipse()` is a function used to draw an ellipse on the canvas
*  `random()` is a function that is used to generate a random value

Some functions sometimes require *inputs*, called **parameters** or **arguments**. For example, the `rect()` function draws a rectangle, but you have to tell it where on the canvas it goes and what the dimensions are. Some functions do different things depending on the number of arguments and their data types. For example `fill()` can take one number for a monochrome colour, three numbers for an RGB colour, or four number for an RBG colour with some transparency.

Some functions provide an *output*, called a **return value**. For example, `random()` outputs a random value for you to use.

### Custom Functions

We can create our own functions for us to use. This is a convenient thing to do when we have the same lines of code repeated many times throughout our program. 

When we want to create a function that has an output, we use the keyword `return`.

```js
function randomCoordinate() { // custom function that generates a coordinate object
  let coordinate = {
    x: int(random(width + 1)),
    y: int(random(height + 1))
  }
  return coordinate;
}
```

We can alse functions to perform calculations for us. Suppose we want a program that draws random lines with positive slopes.

The program below draws lines at random, which have negative, zero, or positive slopes.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  let c1 = randomCoordinate(); // calling our custom function
  let c2 = randomCoordinate();
  line(c1.x, c1.y, c2.x, c2.y); // draws a line using our random coordinates
}

function randomCoordinate() { // custom function
  let coordinate = {
    x: int(random(width + 1)),
    y: int(random(height + 1))
  }
  return coordinate;
}
```

![](../Images/Slope_1.png)

We can create a function that calculates the slope of a line and we can use that to draw only lines with positive slopes. Since we need to know the two coordinates in order to calculate the slope, we need parameters for them.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  let c1 = randomCoordinate();
  let c2 = randomCoordinate();
  let m = slope(c1.x, c1.y, c2.x, c2.y);
  if (0 < m) {
    line(c1.x, c1.y, c2.x, c2.y); // draws the line only if the slope is positive
  }
}

function randomCoordinate() { // custom function with no parameters
  let coordinate = {
    x: int(random(windowWidth + 1)),
    y: int(random(windowHeight + 1))
  }
  return coordinate;
}

function slope(x1, y1, x2, y2) { // custom function with 4 parameters
  return (y1 - y2) / (x2 - x1); // the numerator is "backwards" because of direction of the y-axis
}
```

![](../Images/Slope_2.png)
