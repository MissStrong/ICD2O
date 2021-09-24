### Scope

**Scope** refers to the places where a variable can be accessed. In Javscript, variables can have **block scope**,  **function scope**, or **global scope**.

**Keywords** are reserved words that have a special purpose. The keyword for declaring a variable with block scope is `let`. This is a fairly new keyword (it was added to Javascript in 2015) and it is the preferred way of making a local variable. When we declare a variable using `let`, that variable can only be used within the same block after it's declared. 

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  let coordinate = 300; // declaring a local variable
  ellipse(coordinate, coordinate, 200); 
}
```

![](../../Images/Coordinate300.png)

If we try to use a variable before we declare it using `let`, the program will crash. The error message will say **Reference Error**.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipse(coordinate, coordinate, 200); // this doesn't work since coordinate hasn't been declared yet
  let coordinate = 300; 
}
```

The keyword for declaring a variable with function scope is `var`, which is short for "variable". When we look at other people's JavaScript code online, we will likely see the keyword `var` a lot. It's actually an outdated keyword as of 2015 and now the preferred keyword is `let`. 

An interesting result of using function scope is that we can use variable before we declare them. However, this is usually undesired behaviour (if we wanted to use the variale earlier, we would just declare them earlier). If you're curious about how this works, it's because `var` variables are **hoisted** (you can look up what this means if you're curious).

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipse(coordinate, coordinate, 200); // this actually works
  var coordinate = 300; 
}
```

There is no keyword for declaring a global variable. We simply just omit a keyword.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  coordinate = 300; // declaring a global variable
  ellipse(coordinate, coordinate, 200); // this works
}
```

Since we can use global variables throughout our program, we can use it in a different block of code than the one it was declared in.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  coordinate = 300; // declaring a global variable
}

function draw() {
  ellipse(coordinate, coordinate, 200); // this works
}
```

We can also consider the entire file to be one large block, so we can declare variables at the top of the file.

```javascript
let coordinate = 300; // declaring a global variable (this also works if we omit "let")

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  ellipse(coordinate, coordinate, 200); // this works
}
```

However, we can't just put anything we want at the very top of the file. For example, we can only call P5.js functions from within other P5.js functions like `setup()` and `draw()`.

```javascript
print(height); // this doesn't work

function setup() {
  createCanvas(windowWidth, windowHeight);
}
```