## Introduction to Python



Python is a commonly used beginner programming language since it is considerd to be more easily readable and has simpler syntax.

Python is also a relatively powerful language. It is used to support YouTube, Google, Instagram, Reddit, and other popular software programs.

Python has consistently been in the top three most popular programming langauges over the past two decades. Other languages that have been consistantly popular include Java, C, and Javascript.

### Python Code

Here is an example of the classic "Hello World" program, in which `Hello World` is printed onto the screen. In Python, it is a quick one-line program. It's identical to P5.js aside from the missing semicolon.

```python
print("Hello World!")  # prints "Hello World!" to the console
```

### Comments

Comments are used to write words in your program to help explain what is going on to someone reading your code. There are two types of comments: single-line and multi-line.

- **Multi-line comments** take up multiple lines of code. In Python, they start with `'''` or `"""` and end the same way.
- **Single-line comments** take up only one line of code or one partial line of code. In Python, they start with `#`. These types of comments are typically used to provide a brief decription of what's going on in a particular line of code.

The code above contains an example of a single-line comment.

### User Input

The console isn't just for outputting information. Users can type information into the console.

If you'd like to prompt a user for information, you can use the `input()` function. 

Here is an example:

```python
name = input("What is your name? ")  # gets the user's name
print(f"Hello, {name}!")  # greets the user
```

### Conditionals

We can use **if statements** to check if a condition has been met. The keywords are mostly the same as in P5.js but there are some slight syntax differences.

```python
number = int(input("Pick a number between 1 and 10: "))  # prompts the user to enter a number

if number > 10:  # a colon is used instead of a curly brace
  print("Your number is too high!")  # this line is indented to show that it's in a new code block
elif number < 1:  # "elif" is short for "else if"
  print("Your number is too low!")
else:
  print("Thanks.")  # this is when the user's number is between 1 and 10
```

### Loops

We can use **while loops** to make a code block run indefinitely.

```python
from random import randint # we can't use the random integer function unless we import the random library first

secret_number = randint(1, 10)  # generates a random integer between 1 and 10

while True:  # infinite loop that only stops when you reach a break
  number = int(input("Guess the secret number: "))
  if number == secret_number:
    print("Yup. Nice job!")
    break  # if the guess is correct, the loop stops running 
  elif secret_number < number:
    print("Nope. It's lower.")
  else:
    print("Nope. It's higher.")
```

**For loops** look different in Python than in Javascript.

```python
for number in range(1, 11):  # range generates a list of integers in the specified range
  print(number) # prints the numbers from 1 to 10
```

### Arrays

Arrays are called "lists" in Python.

```python
groceries = ["bread", "milk", "potato"]

more_groceries = ["cereal", "ice cream"]

print(groceries) # prints ["bread", "milk", "potato"]

groceries.append("banana")

print(groceries)  # prints ["bread", "milk", "potato", "banana"]

groceries.remove("milk")

print(groceries)  # prints ["bread", "potato", "banana"]

groceries += more_groceries

print(groceries)  # prints ["bread", "potato", "banana", "cereal", "ice cream"]

groceries.sort()

print(groceries) # prints ["banana", bread", "cereal", "ice cream", "potato"]
```

We can use **for loops** to go through the items in a list one by one.

```
groceries = ["bread", "milk", "potato"]

for item in groceries:
  print(item)  # prints "bread", "milk", "potatoes" on separate lines

```

### Functions

We can make custom functions using the keyword `def` (short for "define").

```python
def is_square_number(number):
  sqrt = number ** 0.5  # getting the square root is the same as raising it to the power of half
  return 0 <= sqrt and sqrt.is_integer()  # returns True if the square root is a positive integer and False otherwise

while True: 
  number = int(input("Enter a square number: "))
  if is_square_number(number):
    print(number, "is a square number.", end = "\n\n")
  else:
    print(number, "is NOT a square number.", end = "\n\n")
```

### Pygame

If we want to create graphics, we need a library like Pygame. The syntax is similar to P5.js. One of the main differences is that Pygame uses tuples a lot.

```python
# Initial setup
import pygame
pygame.init()

# Sets the window to the size of 800x600
screen = pygame.display.set_mode((800, 600))

# Initializing colours (using RGB values) so we can use them later
white = (255, 255, 255)  # this is a tuple
black = (0, 0, 0)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

# Makes the background white
screen.fill(white)

# Draws a green circle
pygame.draw.circle(screen, green, (300, 200), 100)

# Draws a red rectangle
pygame.draw.rect(screen, red, ((50, 50), (100, 130)))

# Draws a blue triangle
pygame.draw.polygon(screen, blue, ((500, 500), (450, 300), (300, 550)))

# Draws a black line
pygame.draw.line(screen, black, (700, 100), (700, 500), 30)

# Keeps the program running and updating
while True:
  pygame.display.update()
```

The program above look like this:

![](../Images/Shapes.png)
