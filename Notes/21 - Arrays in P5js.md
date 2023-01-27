## Arrays in P5.js

Suppose we want to generate a random multiple of 10 between 10 and 50.

One solution is to generate a random integer between 1 and 5, then multiply that result by 10:

```js
print(10*int(random(1, 6))); // prints a random multiple of 10 between 1 and 50
```

Another solution is to use an **array**, which is a special type of object. An array is a data structure that stores a list of values called **items** or **elements**. If we call `random()` and give it an **array** as argument, it will generate a random item from the array.

Arrays are enclosed in square brackets `[]` and their items are separated by commas. **The order of these items matter.**

```js
let numbers = [10, 20, 30, 40, 50]; // an array
print(random(numbers)); // prints a random number from the array
```

If we use an array that has duplicates, we can change the probabilities of each outcome.

```js
let numbers = [10, 20, 20, 30, 30, 30]; // an array with duplicate items
print(random(numbers)); // 1/2 chance of 30, 1/3 chance of 20, 1/6 chance of 10
```

 

### Accessing Items in an Array

Each item in an array is assigned an **index**. The index tells us which position the item is at. The first position is index 0, the second position is index 1, the third position is index 2, and so on. The plural of index is **indices** or **indexes**.

**In computer science, we often start counting at 0 instead of 1**. Being "off by one" is a common phenomenon when programming.

When we want to access an item in an array, we can do that by calling the name of the array and putting the item's index in square brackets. For example:

```js
let numbers = [10, 20, 30, 40, 50]; // an array
print(numbers[1])  // prints 20
```

We can get the number of items in an array using the **length** property.

```js
let numbers = [10, 20, 30, 40, 50]; 
let length = numbers.length // the number of items in the array
print(length)  // prints 5
print(numbers[length - 1])  // prints the last number in the array, 50
```

We can find the index of an array using the `indexOf`() **method**. A method is a function that belongs to an object. It uses dot syntax.

```js
let numbers = [10, 20, 30, 40, 50]; 
print(numbers.indexOf(30))  // prints 2
print(numbers.indexOf(50))  // prints 4
print(numbers.indexOf(60))  // prints -1 (which means it's not in the array)
```

 

### Modifying Items in an Array

We can add items to an array or remove items from an array at any point after we initialize it. 

We can add items to the back of the array using the `push()`method. 

```js
let numbers = [10, 20, 30, 40, 50]; 
numbers.push(60); // puts 60 at the end of the array
print(numbers); // prints [10, 20, 30, 40, 50, 60]
```

We can remove the last item using the `pop()` method.

```js
let numbers = [10, 20, 30, 40, 50]; 
numbers.pop(); // removes the 50 at the end of the array
print(numbers); // prints [10, 20, 30, 40]
```

  

### Using For Loops with Arrays

We can "go through" each item in an array using a *for* loop.

```js
let numbers = [10, 20, 30, 40, 50]; 

for (let index = 0; index < numbers.length; index++) { // the loop is executed once per index
  print(numbers[index]); // prints each number in the array one at a time
}
```

 

### Using Arrays to Store Objects

If we wanted several shapes with different properties on our canvas, we can use an array to keep track of each individual one.

For example, this program shows 20 different circles "falling" down.

```js
let circles = []; // this will store all the circles
let numCircles = 20; // there will be 20 circles altogether

function setup() {
  createCanvas(500, 500);
  for (let index = 0; index < numCircles; index++) { // makes 20 random circles
    let circle = {
      x: int(random(501)), // random x and y coordinates
      y: int(random(501)),
      diameter: random([25, 50, 75]) // random diameter among these three numbers
    }
    circles.push(circle); // puts the circle into the array
  }
}

function draw() {
  background(100);
  for (let index = 0; index < numCircles; index++) { // goes through each of the 20 circles
  let circle = circles[index];
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter); 
    circle.y++; // increases the y coordinate so that it looks like the circle is falling
    if (circle.y > 500) { // when the circle falls off the screen, it goes back to the top
      circle.y = 0;
    }
  }
}
```
![](../Images/Falling_Circles.png)

