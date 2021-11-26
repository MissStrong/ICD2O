### Modifying Arrays

We can add items to an array or remove items from an array at any point after we initialize it. 

We can add items to the back of the array using the `push()` **method**. A method is a function that belongs an object.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 
  numbers.push(60); // puts 60 at the end of the array
  print(numbers); // prints [10, 20, 30, 40, 50, 60]
}
```

We can remove the last item using the `pop()` method.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 
  numbers.pop(); // removes the 50 at the end of the array
  print(numbers); // prints [10, 20, 30, 40]
}
```

If we use `pop()` on an empty array, it doesn't do anything.

```js
function setup() {
  let nothing = []; 
  nothing.pop(); // removes nothing since the array is empty
  print(nothing); // prints []
}
```

We we want to remove a specific item from an array, we can use the `splice()` method. This takes an index and the number of items to remove starting at that index.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 
  numbers.splice(3, 1); // removes one item at index 3 (the 40)
  print(numbers); // prints [10, 20, 30, 50]
}
```

If we don't know the index of an item, we can use the `indexOf()` method to find it. If there are duplicate items, it will tell you the index of the first one.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 
  numbers.splice(numbers.indexOf(40), 1); // removes one item starting at the index where 40 is
  print(numbers); // prints [10, 20, 30, 50]
}
```

By changing the second argument from `1` to a larger number, we can remove many consecutive items at once.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 
  numbers.splice(1, 3); // removes three items starting at index 2
  print(numbers); // prints [10, 50]
}
```
