### Screen Coordinates

Coordinates in programming are usually different from coordinates in math. 

In math, 2-dimensional coordinates can be graphed on a Cartesian Plane like this:

![](../../Images/Cartesian_Plane.jpg)

In computer science, we usually don't use the Cartesian plane for coordinates. Instead, the coordinate system we use looks like this:

![](../../Images/Coordinate_Plane.jpg)

For example, if we are referring to a specific pixel in an image, we would use this coordinate system instead of the Cartesian plane. 

The idea is that this is similar to how we would refer to cells in a table: The row number followed by column number, with Row 0 Column 0 representing the cell in the top-left corner. This is also similar to how we read in English: left to right, top to bottom.

The coordinate (0, 0) is referred to as the **origin**. In P5.js, **the origin is the top-left corner**, not the center like in math.

### The `ellipse()` Function

We use `ellipse()` to draw circles and ellipses. Ellipses are like circles except they have a the horizontal diameter and the vertical diameter. This function takes three or four parameter: an *x*-value, a *y*-value, a horizontal diameter, and an optional vertical diameter. By default, (*x*, *y*) is the center of the circle or ellipse using the coordinate system described above

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipse(150, 270, 140); // circle
  ellipse(370, 190, 140, 200); // ellipse
}
```

![](../..//Images/Ellipse1.png)
