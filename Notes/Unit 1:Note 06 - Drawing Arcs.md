### The `arc()` Function

An **arc** is a curve along the circumference of a circle. We use `arc()` to draw arcs. This function takes the same four parameters as `ellipse()`, but it also takes three more: the starting point, the ending point, and the mode. 

By default, the starting and ending points are written in **radians**. Radians are a unit used to measure the size of an angle, just like degrees. Radians usually aren't taught until Grade 12 Advanced Functions, so it'll be easier for us to use degrees. To be able to use degrees instead, call  `angleMode(DEGREES);`.

Here are a few significant points of an ellipse:

*  0° is the right-most point
*  90° or -270° is is the bottom-most point
*  180° is the left-most point
*  270° or -90°  is the top-most point

There are three modes for the arc:

* `CHORD` (a line is drawn from the start and end point)
* `PIE` (it looks like a pie)
* `OPEN` (there is no line drawn from the start and end point)

![](../../Images/Arcs_In_Degrees.png)

