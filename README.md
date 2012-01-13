# JavaScript To-Do App Face-Off

In the last few years, several JavaScript application frameworks have emerged, all competing to be the
tool-of-choice for building To-Do applications on the web. This is a contest to implement a to-do application
with the **application framework of your choice**, and then compare and contrast with other forks of the
project.

## Instructions

1. Pick an app framework to use. Here are some frameworks you might try to implement this in:

  * [backbone.js](http://documentcloud.github.com/backbone)
  * [knockout.js](http://knockoutjs.com/)
  * [ember.js](http://emberjs.com/)
  * [batman.js](http://batmanjs.org/)
  * [spine.js](http://spinejs.com/)
  * [JavaScriptMVC](http://javascriptmvc.com/)

2. Load your dependent JavaScripts into `index.html`

3. Hack-hack-hack in `src/js/todos.js`.

  You'll noticed that client-side HTML templates are provided in `<script>` tags in `index.html`. To
  get at the default HTML template for the main application view, you might do this with jQuery:

  ``` javascript
  $('#app-template').html();
  ```

4. Make the specs pass

  There are Jasmine specs included (you'll probably have noticed the runner output on the bottom of the page).
  Prove your implementation is the greatest by making them go green! You can find the specs in `spec/todos-spec.js`

  At the top of the spec file, there's a `window.todoAppDriver` that defines a few methods for interacting with
  the application. These work for Jérôme's backbone.js example, but your mileage may vary. Feel free to override
  those methods as necessary so that the specs know how to create, read, update, and delete to-dos in your
  version of the app.

5. Compare your results!

  With the fresh hindsight of your own experience, check out how others implemented their applications by
  pulling down other forks of this repo.

### Thanks

The repo comes with the web assets from [Jérôme Gravel-Niquet](http://jgn.me/)'s
[Todo List example](http://documentcloud.github.com/backbone/examples/todos/index.html) for
[backbone.js](http://documentcloud.github.com/backbone).
