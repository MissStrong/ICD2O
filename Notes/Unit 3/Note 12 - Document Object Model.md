### Document Object Model

A **Document Object Model** (DOM) of a webpage is model showing how all the HTML elements are connected. At the top is the **document**, which represents the entire webpage. Underneath the document we have the `<html>` element, and underneath that we have `<head>` element and `<body>` element. 

Here is an example of a DOM.

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>My Webpage</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <h3>My Title</h3>
    <p>This is a sentence.</p>
  </body>
</html>
```

![](../Images/DOM.png)

A model is automatically created by the browser when we load a webpage. This is what allows us to use JavaScript to modify the HTML elements and the CSS styles.

To access a specific element, we can make an `id` attribute for it and the `document` method `.getElementById()`. This will return the element as an object. We can change the text inside a set of opening and closing tags by modifying the `innerHTML` property of the element object.

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>My Webpage</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <h3>My Title</h3>
    <p id="sentence">This is a sentence.</p>
    <script src="script.js"></script>
  </body>
</html>
```

```js
// This is script.js

document.getElementById("sentence").innerHTML = "This is a different sentence."; // changes the text in the <p> tag
```
