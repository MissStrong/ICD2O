### The `strokeWeight()` Function

By default, the outline of a shape is one pixel wide. If we want the outline of a shape to be thicker, we can use the `strokeWeight()` function. The parameter is the number of pixels.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(5); // makes the outline of all shapes 5 pixels wide
  rect(100, 100, 150, 150);
  ellipse(450, 200, 150, 150);
}
```

![](../Images/StrokeWeight.png)



### The `noStroke()` Function

If we want the inside of a shape to be transparent, we can use `noStroke()`.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(200); // makes the insides gret
  noStroke(); // makes all the outlines transparent
  rect(100, 100, 150, 150);
  ellipse(450, 200, 150, 150);
}
```



![](../Images/NoStroke.png)

### The `noFill()` Function

If we want the outline of a shape to be transparent, we can use `noFill()`.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill(); // makes all the insides transparent
  rect(100, 100, 150, 150);
  rect(150, 150, 150, 150);
}
```

![](../Images/NoFill.png)
