### Images

To display an image, we use the self-closing `<img />` tag. The location of the image is called an **image source**. The attribute for an image source is `src`. 

If the image is already on the Internet, we can use the image's URL. We can get the URL by right-clicking on the image and selecting *Copy Image Address*.

![](../../Images/Doge_Address.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Image</title>
  </head>
  <body>
    <img src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"/>
  </body>
</html>
```

![](../../Images/HTML_Image1.png)

It's common practice to include an `alt` tag, which indicates the text that appears when we hover over the image. We can also modify the width and height of an image using the `width` and `height` attributes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Image</title>
  </head>
  <body>
    <img src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"  width="480px" height="270px" alt="doge" />
  </body>
</html>
```

![](../../Images/HTML_Image2.png)

If we are uploading the image ourselves and the image file is in the same folder as the HTML file, we just need to write the filename. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Image</title>
  </head>
  <body>
    <img src="doge.jpeg" width="480px" height="270px" alt="doge" />
  </body>
</html>
```

![](../../Images/HTML_Image3.png)

If the image is in a folder then we need to specify the filepath. We write the folder name followed by a forward slash followed by the filename.


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Image</title>
  </head>
  <body>
    <img src="Images/doge.jpeg" width="480px" height="270px" alt="doge" />
  </body>
</html>
```

![](../../Images/HTML_Image4.png)
