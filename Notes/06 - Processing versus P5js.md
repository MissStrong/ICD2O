## Processing versus P5.js

We have been learning the basics of Processing from [hello.processing.org/editor](http://hello.processing.org/editor) and writing our code using [openprocessing.org](http://openprocessing.org). 

The programming language used in openprocessing.org is actually a dialect of Processing called **P5.js** and is a library in Javascript (the "js" in P5.js stands for Javascript) . Javascript is a programming language used for website development. It is often used alongside HTML (Hypertext Markup Language) and CSS (cascade style sheet) to display information on a website. On a sketch in openprocessing.org, if you change the mode to HTML/CSS, you can see the HTML and CSS files running in the background to get your sketch to appear in your browser.

![](../Images/HTML_CSS2.png)

There are a few minor differences between the Processing and P5.js. Here are a few that you may have noticed so far.

| Processing       | P5.js                |
| ---------------- | -------------------- |
| `void setup()`   | `function setup()`   |
| `void draw()`    | `function draw()`    |
| `void preload()` | `function preload()` |
| `size()`         | `createCanvas()`     |

If we wanted to write Processing code instead of P5.js, we would need to download the [Processing Editor](https://processing.org/download/), which we cannot do on Chromebooks (which is why we're not using it for this course). 

Reference pages:

* [P5.js](https://p5js.org/reference/)
* [Processing](https://processing.org/reference/)
