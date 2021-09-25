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
```

Next unit we'll see how to detect specific keys.
