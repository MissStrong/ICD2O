### Using For Loops with Arrays

We can "go through" each item in an array using a *for* loop.

```js
function setup() {
  let numbers = [10, 20, 30, 40, 50]; 

  for (let index = 0; index < numbers.length; index++) { // the loop is executed once per index
    print(numbers[index]); // prints each number in the array one at a time
  }
}
```
![](../../Images/For_Loop1.png)

This is useful when we need to keep track of the indices. In this case we didn't need them, so we can use a different strategy.

### For...Of Loops

TODO