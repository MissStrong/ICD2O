### Checkboxes

We can create checkboxes using an `<input>` tag with `type="checkbox"`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>User Input</title>
  </head>
  <body>
    <form>
      <label for="name">Enter your username:</label>
      <input type="text" id="name" />
      <br />
      <label for="password">Enter your password:</label>
      <input type="password" id="password" />
      <br />
      <label for="show-password">Show Password</label>
      <input type="checkbox" id="show-password" />
    </form>
  </body>
</html>
```

![](../../Images/JS_Checkbox_1.png)

If we want to make something happen when we check off the box, we can use the `onclick` attribute. This allows us to call a function whenever the checkbox is checked or unchecked.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>User Input</title>
    <script src="script.js" charset="utf-8"></script>
  </head>
  <body>
    <form>
      <label for="name">Enter your username:</label>
      <input type="text" id="name" />
      <br />
      <label for="password">Enter your password:</label>
      <input type="password" id="password" />
      <br />
      <label for="show-password">Show Password</label>
      <input type="checkbox" id="show-password" onclick="togglePassword()";/>
    </form>
  </body>
</html>
```

```js
// This is in the script.js file

function togglePassword() {
  let password = document.getElementById("password");
  if (password.type === "password") { // password goes from showing to not showing
    password.type = "text";
  } else if (password.type === "text") { // password goes from not showing to showing
    password.type = "password";
  }
}
```

![](../../Images/JS_Checkbox_2.png)
