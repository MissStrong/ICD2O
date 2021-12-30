### Lists

**Ordered lists** are lists with numbered items whereas **unordered lists** are lists with bulleted items. We can create an ordered list with the `<ol>` tag and an unordered list with the `<ul>` tag. The items within either type of list use `<li>` (list item) tags.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Lists</title>
  </head>
  <body>
    <p>Here is an ordered list:</p>
    <ol>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ol>
    <p>Here is an unordered list:</p>
    <ul>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>
  </body>
</html>
```

![](../../Images/HTML_List_1.png)

The symbols in front of each item is called a **list marker**. By default, the list markers for unordered lists are closed circles • and the list markers for ordered lists are Hindu-Arabic numerals (0, 1, 2, ..., 9).

We can change the list marker using the `list-style-type` property in `ul` or `ol`. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <title>Lists</title>
  </head>
  <body>
    <p>Here is an ordered list with lowercase Roman numerals:</p>
    <ol>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ol>
    <p>Here is an unordered list with square markers:</p>
    <ul>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>
  </body>
</html>
```

```css
ol {
  list-style-type: lower-roman;
}

ul {
  list-style-type: square;
}
```

![](../../Images/HTML_List_2.png)

Here is the [full list of values for `list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#values).

We can place lists inside of sectioned elements such as `<div>` or `<table>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Lists</title>
  </head>
  <body>
    <div>
      <h4>Colours</h4>
      <ul id="colours">
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
    </div>
    <div>
      <h4>Shapes</h4>
      <ul id="shapes">
        <li>Circle</li>
        <li>Square</li>
        <li>Triangle</li>
      </ul>
    </div>
  </body>
</html>
```

![](../../Images/HTML_List_3.png)

Let's add some styling to the webpage above.

```css
h4 {
  margin: 0px;
  text-align: center;
}

div {
  float: left;
  border: 1px solid black;
  margin: 10px;
  vertical-align: top;
}


ol, ul {
  padding-left: 0px;
  list-style-position: inside;
}

li {
  margin: 20px;
}
```

![](../../Images/HTML_List_4.png)
