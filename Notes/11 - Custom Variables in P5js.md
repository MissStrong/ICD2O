## Custom Variables in P5.js

We've come across several built-in variables such as `mouseX` and `windowHeight`, but we have the ability to make our own custom variables.

We **declare** a custom variable by giving it a name. Ideally, the name is a descriptive word or several descriptive words. Then, we **assign** it a value to it using the assignment operator `=`. The value can be a number, a Boolean, a string, or any other data type.

We used this process when we were getting an image to displayed on the canvas. 

```js
function preload() {
  doge = loadImage("doge.png"); 
}
```

### Scope

**Scope** refers to the places where a variable can be accessed. Not all variables can be accessed from anywhere inside of your program.

**Local variables** cannot be accessed from anywhere within program. They are initialized inside a structure, such as a function or a conditional structure and can only be used within that scope.

There are two keywords to create local variables: `var` (short for "variable") and `let`. They have some minor differences, but in general `let` is newer and safer to use.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  let coordinate = 0; // declaring a variabe and giving it the value of 0
  ellipse(coordinate, coordinate, 20, 20); // a circle is drawn centered at (0, 0)
}
```

Since the scope of `coordinate` is the body of `draw()` , we can only use `coordinate` in side the `draw()` function.

**Global variables** can be accessed from anywhere within a program. There are two ways to create global variables: don't use a keyword, or declare it outside of a function.

```js
let coordinate = 0; // declaring a variabe and giving it the value of 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  ellipse(coordinate, coordinate, 20, 20); // a circle is drawn centered at (0, 0)
}
```

Since the scope of `coordinate` is the entire program , we can use `coordinate` in any of the functions or anywhere outside the functions.

We can modify the program to make the circle move. For example, we can update the value of the coordinate to increase by 5 each time the `draw()` function is run.

```js
let coordinate = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  ellipse(coordinate, coordinate, 20, 20); 
  coordinate = coordinate + 10; // the value of the coordinate increases by 10 
}
```
![](../Images/Circle_Trail.png)

The previous example with the image is also an example of a global variable. This explains why we were able to declare and initialize it in one function and use it in another function.

```js
function preload() {
  doge = loadImage("doge.png");  // doge is declared here as a global variable
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  imageMode(CENTER);
  image(doge, windowWidth/2, windowHeight/2); // since doge is global, we can use it here
}
```

### Constants

A **constant** behaves like a variable, except its value can never change in a program once it has been initialized. The convention is to write constants in all uppercase letters. If it is more than one word, we seprate them with underscores. We've seen the following constants so far:

* `CENTER`
* `PI`
* `HALF_PI`

We can declare constants using the keyword `const` and writing the name in capital letters.

```js
const WEIGHT = 10; // the value of WEIGHT will never change in our program

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(WEIGHT); // this is equivalent to strokeWeight(10);
  ellipse(mouseX, mouseY, 50, 50);
}
```

Constants that are declared using `const` are global if they are declared outside a function and local if they are declared inside a smaller scope.


### Naming Notations

In different programming languages, there are different rules for naming. Here are some of the common notations used.

| Notation Name    | Example                  | Explanation                                                  |
| ---------------- | ------------------------ | ------------------------------------------------------------ |
| Camel Case       | thisIsCamelCase          | Every word begins with a capital, except for the first word.<br/><br/>All other letters are lowercase. |
| Pascal Case      | ThisIsPascalCase         | Every word begins with a capital.<br/><br/>All other letters are lowercase. |
| Snake Case       | this_is_snake_case       | Every letter is lowercase.<br/><br/>Words are separated with underscores. |
| Caterpillar Case | this-is-caterpillar-case | Every letter is lowercase.<br/><br/>Words are separated with hyphens. |

In Processing, we use:
* camel case for variables and functions
* screaming snake case (snake case in all capital letters) for constants
