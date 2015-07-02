$(function() {

    // new to do list
    var $newItemForm = $("#new_todo_item");

    // variable that stores our to do list
    var $taskOL = $("#todo_list");

    // todo template
    var toDoTemplate = _.template($('#todo-template').html());

    function ToDo(task,description) {
    this.task = task;
    this.description = description;
    }

    ToDo.all = [];

    var task1 = new ToDo("Kick Ass", "Use JavaScript");
    var task2 = new ToDo("World Domination", "Befriend Elon Musk");

    ToDo.prototype.save = function(){
    // add tasks to ToDo array
    ToDo.all.push(this);
    };

    task1.save();
    task2.save();

    // Function that renders tasks into ToDo array
    ToDo.prototype.render = function() {
    return toDoTemplate;
    };

    // appends existing todos (from seed data) to `$taskOL`
    _.each(ToDo.all, function (todo, index) {
    var $todo = $(toDoTemplate(todo));
    $todo.attr('data-index', index);
    $taskOL.append($todo);
    });

    // on click to submit our data
    $newItemForm.on("submit", function(event) {
    event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#item_name').val();
    var toDoDesc = $('#item_descr').val();
    var newTask = new ToDo(toDoName, toDoDesc);

    newTask.save();

    // append our new todo to the page
    var $todo = $(toDoTemplate(newTask));

    $todo.attr('data-index', newTask.task, newTask.description);
    $taskOL.append($todo);

    // reset the form
    $newItemForm[0].reset();
    $("#item-name").focus();

  });

    // Completed tasks get crossed out and disappear using method chaining
    $taskOL.on("click", ".item", function() {
    $(this).addClass("complete").hide("fast");
    });
    console.log("That's a bingo!");

  });