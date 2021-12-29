### Tables

Tables use `<table>` tags. Every row in the table uses `<tr>` (table row) tags. Each cell in the first row should use `<th>` (table header) tags if the first row is a header and all the cells should use `<td>` (table data) tags.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Animals in Different Languages</title>
  </head>
  <body>
    <h1>Animals in Different Languages</h1>
    <table>
      <tr>
        <th>English</th>
        <th>Dutch</th> 
        <th>Italian</th> 
        <th>Russian</th> 
        <th>Arabic</th> 
        <th>Hindi</th>   
        <th>Korean</th> 
        <th>Japanese</th> 
      </tr>
      <tr>
        <td>Dog</td>
        <td>Hond</td>
        <td>Cane</td>
        <td>Собака</td>
        <td>كلب</td>
        <td>कुत्ता</td>
        <td>개</td>
        <td>犬</td>
      </tr>
      <tr>
        <td>Cat</td> 
        <td>Kat</td>
        <td>Gatta</td>
        <td>Кот</td>
        <td>قط</td>
        <td>बिल्ली</td>
        <td>고양이</td>
        <td>猫</td>
      </tr>
      <tr>
        <td>Horse</td> 
        <td>Hest</td>
        <td>Cavalla</td>
        <td>Лошадь</td>
        <td>حصان</td>
        <td>घोड़ा</td>
        <td>말</td>
        <td>馬</td>
      </tr>
      <tr>
        <td>Bear</td> 
        <td>Beer</td>
        <td>Orso</td>
        <td>медведь</td>
        <td>يتحمل</td>
        <td>भालू</td>
        <td>곰</td>
        <td>熊</td>
      </tr>
    </table>
  </body>
</html>
```

![](../../Images/HTML_Table_1.png)

We can change some of the properties of the table using attributes. Here are a few examples:
* The `align` attribute changes the horizontal text alignment. By default, `<th>` tags have centered text and `<tr>` tags have left-aligned text. The values for `align` include `left`, `right`, and `center`.
* The `width` attribute changes the horizontal length of the cell. The values are strings that contain the number of pixels followed by `px`.
* The `height` attribute changes the vertical length of the cell. The values are strings that contain the number of pixels followed by `px`.
* The `bgcolour` attribute changes the background colour of the cell. The values are strings that are either hexadecimal values or [colour names](https://www.w3schools.com/colors/colors_names.asp).
  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tables</title>
  </head>
  <body>
    <table>
      <tr bgcolor="grey">
        <th width="70px">Colour</th>
        <th width="100px">RGB Value</th> 
      </tr>
      <tr align="center">
        <td>Red</td>
        <td>(255, 0, 0)</td>
      </tr>
      <tr align="center">
        <td>Green</td> 
        <td>(0, 255, 0)</td> 
      </tr>
      <tr align="center">
        <td>Blue</td> 
        <td>(0, 0, 255)</td>
      </tr>
    </table>
  </body>
</html>
```

![](../../Images/HTML_Table_2.png)
