### Hiding Elements

There are a few days of hiding elements. One is to add the `hidden` attribute in the tag, which doesn't take any value.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>User Input</title>
  </head>
  <body>
    <p hidden>This sentence is invisible!</p>
  </body>
</html>
```

If we want to change the element to being visible, we can 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>User Input</title>
    <script src="script.js"></script>
  </head>
  <body>
    <p hidden id="sentence">This sentence is actually visible!</p>
  </body>
</html>
```
```

```js
// This is in the script.js file

document.getElementById("sentence").removeAttribute("hidden"); // makes the sentence visible
```

A more common way is to use the `visibility` property in the CSS.

TODO
