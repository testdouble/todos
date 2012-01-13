window.context = window.describe;

window.todoAppDriver = {
  createTodo: function(text) {
    $('#new-todo').val(text).trigger(
      jQuery.Event("keypress", { keyCode: 13 })
    );
  },
  readLastTodo: function() {
    return $('.todo-text:last').text();
  },
  editLastTodo: function(newText) {
    $('.todo-text:last').trigger("dblclick");
    $('.todo-input:last').val(newText).trigger('blur');
  },
  deleteLastTodo: function() {
    $('.todo-destroy:last').trigger('click');
  }
};

$(function() {
  describe("A humble to-do application", function() {
    describe("adding a todo", function() {
      var TODO_TEXT = "hug Matt Yoho";
      beforeEach(function() {
        todoAppDriver.createTodo(TODO_TEXT);
      });

      it("adds a todo", function() {
        expect(TODO_TEXT).toBeTheLastTodo();
      });

      afterEach(function() {
        todoAppDriver.deleteLastTodo();
      });
    });

    describe("editing a todo", function() {
      var NEW_TEXT = "drink Marc Peabody's ale";
      beforeEach(function() {
        todoAppDriver.createTodo("drink Bud Light");

        todoAppDriver.editLastTodo(NEW_TEXT);
      });

      it("edits the todo", function() {
        expect(NEW_TEXT).toBeTheLastTodo();
      });

      afterEach(function() {
        todoAppDriver.deleteLastTodo();
      });
    });

    describe("deleting a todo", function() {
      var DO_NOT_WANT="eat right and exercise";
      beforeEach(function() {
        todoAppDriver.createTodo(DO_NOT_WANT);

        todoAppDriver.deleteLastTodo();
      });

      it("deletes the todo", function() {
        expect(DO_NOT_WANT).not.toBeTheLastTodo();
      });
    });

    beforeEach(function() {
      this.addMatchers({
        toBeTheLastTodo: function() {
          return this.actual === todoAppDriver.readLastTodo();
        }
      });
    });
  });


  //This is just the standard boiler-plate to execute a Jasmine spec runner
  var kickOffJasmine = (function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function(spec) {
      return trivialReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function() {
      if (currentWindowOnload) {
        currentWindowOnload();
      }
      execJasmine();
    };

    function execJasmine() {
      jasmineEnv.execute();
    }

  })();
});

