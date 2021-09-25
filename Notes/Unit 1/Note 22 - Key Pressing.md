### Key Pressing

If we want to detect a single key press, we can use the `keyPressed()` function. 

The way we use the `keyPressed()` function is identical to `mousePressed()`, except we use it to detect key presses instead of mouse presses. 

This example draws a circle in a random place each time a key is pressed.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  ellipse(random(width), random(height), 50);
}

We can use `keyIsDown()` to check which keys are being pressed down. The `keyIsDown()` function takes a number represeneting a keycode and returns `true` if that key is currently being pressed down and `false` otherwise. 

According to [http://keycode.info](http://keycode.info/), the keycode for the enter key is 13. Now we can modify the previous example so that the circle is drawn only if the enter key is being pressed.

```js
const ENTER = 13;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (keyIsDown(ENTER)) { 
    ellipse(random(width + 1), random(height + 1), 50); // the circles only show up when the ENTER key is being pressed down
  }
}
```

![](../../Images/Conditional9.png)
