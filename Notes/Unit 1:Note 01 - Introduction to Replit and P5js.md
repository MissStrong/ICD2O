

### What is Replit?

[Replit](http://replit.com) is a web-based programming environment. In this course, we will be using it to write P5.js programs. 

### What is P5.js?

In this course, we will be creating computer programs using **P5.js**. The "P" stands for "Processing", since it's based on a Java library called Processing, and the 5 comes from the original website for Processing: http://proce55ing.net/. The .js is the file extension for JavaScript.

P5.js is a JavaScript **library**. A library is a collection of files that makes it easier for us to do specific tasks in our program. This library allows us to write code that draws sketches. We can draw shapes, add colour, make them move around, use the mouse and keyboard to interact with the sketch, and much more.

### What does P5.js Code Look Like?

Here is an example of a P5.js program in Replit. We'll be deconstructing it little by little thoughtout the first week of the course.

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	ellipse(mouseX, mouseY, 50);
}
```

![](../Images/Basic_Example.png)

### Where to Lookup Information about P5.js

*Everything* about P5.js can be found on the site https://p5js.org/.
