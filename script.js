$(function() {

	// new to do list
	var $newItemForm = $("#new_todo_item");

	// variable that stores our to do list
	var $taskOL = $("#todo_list");

	// todo template
	var toDoTemplate = _.template($('#todo-template').html());

	// `todoList` array is our model (holds our data)
  // contains test (or "seed") data
  var todoList = [
    {task: "Kick Some Ass", description: "Use JavaScript"},
    {task: "World Domination", description: "Become Friends with Elon Musk"},
    {task: "End Poverty", description: "Build app, sell it, profit, donate!"}
  ];

  // append existing todos (from seed data) to `$taskOL`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(todoList, function (todo, index) {
    var $todo = $(toDoTemplate(todo));
    $todo.attr('data-index', index);
    $taskOL.append($todo);
  });

	$newItemForm.on("submit", function(event) {
		event.preventDefault();

		// create new todo object from form data
    var toDoName = $('#item_name').val();
    var toDoDesc = $('#item_descr').val();
    var toDoData = {task: toDoName, description: toDoDesc};

		// var $newLI = $('<li class="item">' + $("#item_name").val() + ' &nbsp;&#124;&nbsp; ' + $("#item_descr").val() + '</li>');
		// $("#todo_list").append($newLI);

		//add new item to the DOM
		todoList.push(toDoData);
    console.log(todoList);
    var index = todoList.indexOf(toDoData);

    // append our new todo to the page
    var $todo = $(toDoTemplate(toDoData));
    $todo.attr('data-index', index);
    $taskOL.append($todo);

		// reset the form
    $newItemForm[0].reset();
    $("#item-name").focus();

	});

		// Completed tasks get crossed out and disappear using method chaining
		$taskOL.on("click", ".item", function() {
		$(this).addClass("complete").hide("slow");
	});

});

