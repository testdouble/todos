window.context = window.describe;

$(function() {
  beforeEach(function() {
    this.addMatchers({
      toBeTheLastTodo: function() {
        return this.actual === $('.todo-text:last').text();
      }
    });
  });

  describe("Todo app functional test", function() {

    describe("adding a todo", function() {
      var TODO_TEXT = "hug Matt Yoho";
      beforeEach(function() {
        createTodo(TODO_TEXT);
      });
      afterEach(function() {
        deleteLastTodo();
      });

      it("adds a todo", function() {
        expect(TODO_TEXT).toBeTheLastTodo();
      });

    });

    describe("editing a todo", function() {
      var NEW_TEXT = "drink Marc Peabody's ale";
      beforeEach(function() {
        createTodo("drink Bud Light");
        $('.todo-text:last').trigger("dblclick");
        $('.todo-input:last').val(NEW_TEXT).trigger('blur');
      });
      afterEach(function() {
        deleteLastTodo();
      });

      it("edits the todo", function() {
        expect(NEW_TEXT).toBeTheLastTodo();
      });
    });

    describe("deleting a todo", function() {
      var DO_NOT_WANT="Exercise and eat right.";
      beforeEach(function() {
        createTodo(DO_NOT_WANT);
        deleteLastTodo();
      });

      it("deletes the todo", function() {
        expect(DO_NOT_WANT).not.toBeTheLastTodo();
      });
    });
  });

  var createTodo = function(text) {
    var $input = $('#new-todo');
    $input.val(text).trigger(jQuery.Event("keypress", { keyCode: 13 }));
  };

  var deleteLastTodo = function() {
    $('.todo-destroy:last').trigger('click');
  };


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

