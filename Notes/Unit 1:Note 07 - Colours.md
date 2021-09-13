### RGB Values

All colours that can be displayed on a computer can be expressed using a combination of 24 zeros and ones (i.e. binary digits, or bits). One of the most common way of indicating a colour is to use its  red-green-blue (**RGB**) value. An RGB value shows how to create the colour using combinations of red, green, and blue light. It is often represented as a **tuple** in which each number is an 8-bit integer ranging from 0 to 255. Like a coordinate, a tuple is an ordered sequence of numbers surrounded by parentheses.

Here are the RGB values of common colours.

| Colour | RGB value       |
| ------ | --------------- |
| Black  | (0, 0, 0)       |
| White  | (255, 255, 255) |
| Red    | (255, 0, 0)     |
| Orange | (255, 165, 0)   |
| Yellow | (255, 255, 0)   |
| Green  | (0, 255, 0)     |
| Blue   | (0, 0, 255)     |
| Purple | (128, 0, 128)   |
| Pink   | (255, 192, 203) |

### The `background()` Function

We can use `background()` to change the colour of the canvas. If we give it one argument between 0 and 255, the background will be a monochrome colour. If we give it three arguments between 0 and 255, the background will be an RBG colour.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 165, 0); // makes the background orange
}
```

![](../Images/Background.png)

### The `fill()` Function 

By default, the inside of a shape is white. To change the inside colour of a shape, we use the `fill()` function. This tells the program that the inside of *all the shapes* from now on will be a certain colour.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(255, 165, 0); // makes the inside orange
  rect(130, 90, 260, 120); // rectangle
	ellipse(370, 190, 140, 200); // ellipse
}
```

Here is the result:

![](../Images/Fill.png)

### The `stroke()` Function

By default, the outline of a shape is black. To change the outline colour of a shape, we use the `stroke()` function. This tells the program that the outline of *all the shapes* from now on will be a certain colour.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  stroke(128, 0, 128); // makes the outlines purple
  rect(130, 90, 260, 120); // rectangle
	ellipse(370, 190, 140, 200); // ellipse
}
```

Here is the result:

![](../Images/Stroke.png)