### The `point()` Function

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(10); // makes every point 10 pixels thick
  stroke(0, 0, 255); // makes every point blue
  point(130, 365);
  point(150, 255);
  point(170, 165);
  point(190, 95);
  point(210, 45);
  point(230, 15);
  point(250, 5);
  point(270, 15);
  point(290, 45);
  point(310, 95);
  point(330, 165);
  point(350, 255);
  point(370, 365);
}
```

![](../Images/Point.png)

### The `line()` Function

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(5);
  stroke(0, 0, 255);
  line(40, 0, width, height);
}
```

![](../Images/Line.png)

### The `triangle()` Function

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  triangle(80, 150, 136, 40, 192, 150);
}
```

![](../Images/Triangle.png)

### The `quad()` Function

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  quad(38, 31, 486, 20, 369, 363, 30, 276);
}
```

![](../Images/Quad.png)
