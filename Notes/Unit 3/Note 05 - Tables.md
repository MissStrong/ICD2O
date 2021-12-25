### Tables

Tables use `<table>` tags. Every row in the table uses `<tr>` (table row) tags. Each cell in the first row should use `<th>` (table header) tags if the first row is a header and all the cells should use `<td>` (table data) tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tables</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Colour</th>
        <th>RGB Value</th> 
      </tr>
      <tr>
        <td>Red</td>
        <td>(255, 0, 0)</td>
      </tr>
      <tr>
        <td>Green</td> 
        <td>(0, 255, 0)</td> 
      </tr>
      <tr>
        <td>Blue</td> 
        <td>(0, 0, 255)</td>
      </tr>
    </table>
  </body>
</html>
```

![](../../Images/HTML_Table_1.png)

We can change some of the properties of the table using attributes. Here are a few examples:
* The `text-align` attribute changes the text alignment. By default, `<th>` tags have centered text and `<tr>` tags have left-aligned text. The values for `text-align` include `left`, `right`, and `center`.
* 
  
