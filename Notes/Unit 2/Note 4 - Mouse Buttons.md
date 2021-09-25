### Mouse Button

If we want to know which mouse button was pressed, we can use the string variable `mouseButton`. It stores the values of `LEFT` (equivalent to `"left"`), `CENTER` (equivalent to `"center"`), or `RIGHT` (equivalent to `"right"`), depending on which one was most recently pressed. On a trackpad, a left click is the same as a one-finger click, a right click is the same as a two-finger click, and a middle click is the same as a three-finger click. 

![](../../Images/Mouse_Buttons.png)

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mouseButton == LEFT) { 
    print("You left clicked.");
  } else if (mouseButton == CENTER) {
    print("You middle clicked.");
  } else {
    print("You right clicked.");
  }
}
```

![](../../Images/Mouse_Pressed2.png)

