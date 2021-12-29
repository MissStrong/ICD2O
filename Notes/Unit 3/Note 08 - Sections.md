### Divisions

We can use `<div>` (division) tag to separate a webpage into sections. This allows us to group elements together and style them accordingly.

Here is an example:

![](../../Images/HTML_Div_1.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Divisions</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div id="section1">
      <p>This is a &lt;p&gt; element inside a &lt;div&gt; element</p>
      <p>This is another &lt;p&gt; elemen inside the same &lt;div&gt; element</p>
    </div>
  </body>
</html>
```

The `&lt;` (the less than symbol) and `&gt;` (the greater than symbol) are used instead of `<` and `>` since otherwise it would be interpretted as a tag.


```css
#section1 {
  border-color: black;
  border-style: dotted;
  border-width: thin;
  color: red;
  margin: 5px;
}
```

Here are all the values for (border-style)[https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax] and (border-width)[https://developer.mozilla.org/en-US/docs/Web/CSS/border-width#syntax]. The margin is the amount of space outside the border of the element.

By default, `<div>` elements take up the entire width of the webpage. If we want it to take up only as much width as it needs, we can add `float: left;` to the CSS.

![](../../Images/HTML_Div_2.png)

```css
#section1 {
  border-color: black;
  border-style: dotted;
  border-width: thin;
  color: red;
  margin: 5px;
  float: left;
}
```

Putting `float: left;` also allows us to put something directly to the right of a section. Otherwise, it would appear underneath it.

![](../../Images/HTML_Div_3.png)


### Spans

We can also use a <span> tag to separate a webpace into sections. The main difference between <div> and <span> is that browsers automatially put a line break before and after a <div> element whereas they do not do this for <span> elements.
