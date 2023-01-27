## Conditionals in P5.js

A **Boolean variable** is a variable whose value is either  `true` or `false`. The word "Boolean" is named after George Boole, a logician from the 1800s. 

 `mouseIsPressed` and `keyIsPressed` are some examples of built-in Boolean variables in Processing:

*  `mouseIsPressed` is `true` when the mouse is currently being pressed down and `false` otherwise.
* `keyIsPressed` is `true` when any key on the keyboard is currently being pressed down and `false` otherwise.

A **conditional structure** is a section of code in which certain blocks are only run when certain conditions are met. We use Booleans to create these conditions.

The simplest type of conditional structure is called an **if statement.**

For an `if` statement, we have the keyword `if` followed by a Boolean in parenthesis, followed by a block of code enclosed in curly braces. In the block, we write the code that we want to run when the condition is met. 

Here is an example of an `if` statement. It draws a circle where the cursor is, but only when the mouse is pressed down.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (mouseIsPressed) { 
    ellipse(mouseX, mouseY, 50, 50); // this line only runs when the mouse is pressed down
  }
}
```

We could also have multiple `if` statements together. Here is an example of that. The circle shrinks when you press down a key.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (mouseIsPressed) { 
    ellipse(mouseX, mouseY, 50, 50); // this line only runs when the mouse is pressed down
  } if (keyIsPressed) {
    ellipse(mouseX, mouseY, 25, 25); // this line only runs when the key is pressed down
  }
}
```

If we only want the second block to run only if the previous one didn't run, we can put `else` in front of the second statement. 

Here is an example of that. The difference is that if the mouse and key are both pressed, only the first blcok runs (the smaller circle won't show up underneath the larger circle).

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (mouseIsPressed) { 
    ellipse(mouseX, mouseY, 50, 50);
  } else if (keyIsPressed) { // this line is slightly different from before
    ellipse(mouseX, mouseY, 25, 25); 
  }
}
```

Another type of conditional structure is called an **if-else statement.**

For an `if`-`else` statement, we have an `if` statement followed by the keyword `else` and another block of code enclosed in curly braces. In the block, we write the code that we want to run when the condition is *not* met.

Here is an example of an `if` -`else` statement. It draws a circle when the mouse is held down, and a square when the mouse is not held down.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (mouseIsPressed) { 
    ellipse(mouseX, mouseY, 50, 50); // this line only runs when the mouse is pressed down
  } else {
    rectMode(CENTER);  // these two line only runs when the mouse is NOT pressed down
    rect(mouseX, mouseY, 50, 50); 
  }
}
```

If we want the opposite value of a Boolean, we can use the **not operator**, which is the exclamation mark symbol `!`.

The example below is the same as above except it draws a square when mouse is held down and a circle when it is not held down.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (!mouseIsPressed) { // this line is slightly different from before
    ellipse(mouseX, mouseY, 50, 50); 
  } else {
    rectMode(CENTER);
    rect(mouseX, mouseY, 50, 50); 
  }
}
```
