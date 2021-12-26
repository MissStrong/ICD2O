### Self-Closing Tags

All of the opening tags we've seen have a closing tag to match it. There are also **self-closing tags** that don't require a separate closing tag.

Here are some examples:
* `<br />` is a line break (it puts vertical space between content).
* `<hr />` is a horizontal rule (a black horizontal line that goes across the page).
* `<img />` is for images.
* `<embed />` is for embedded content such as videos.

The forward slash `/` at the end are optional, but it is conventional to put them in to remind ourselves that they don't need a separate closing tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Self-Closing Tags</title>
  </head>
  <body>
    <p>This is a paragraph with a break<br /> and a horizontal rule <hr /> in it.</p>
  </body>
</html>
```
