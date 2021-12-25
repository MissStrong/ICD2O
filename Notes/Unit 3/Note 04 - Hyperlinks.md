### Links

Hyperlinks use the **anchor tag** `<a>`. An **anchor** is text that contains a hyperlink. For example, in the hyperlink [click here](https://www.youtube.com/watch?v=MSRN3hjzVkQ), the anchor is the text "click here". 

Anchor tags require a **hypertext reference** `href`, to tell the browser what URL to go to when the hyperlink is clicked. 

We can also specify whether clicking on the link will open the webpage in a new tab or the same tab. By default they will open in the same tab, but we can specify the `target` to be a new tab `"_blank"`.

`href` and `target` are an examples of **attributes**. Attributes are parameters that are placed within an opening tag and are separated by spaces. The order of the attributes don't matter.

Here is is the previous "click me" example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hyperlink</title>
  </head>
  <body>
    <a href="https://www.youtube.com/watch?v=MSRN3hjzVkQ" target="_blank">click me</a>
  </body>
</html>
```
![](../../Images/HTML_Hyperlink.png)
