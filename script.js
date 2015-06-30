$(function() {

	var $newItemForm = $("#new_todo_item");

	var $taskOL = $("#todo_list");

	$newItemForm.on("submit", function(event) {
		event.preventDefault();
		console.log($( "#item_name" ).val());
		var $newLI = $('<li class="item">' + $("#item_name").val() + '</li>');
		$("#todo_list").append($newLI);

		//add new item to the DOM
		todoList.push({
			title: $("#item_name").val(),
		});
	});

	var todoList = [];

	var item1 = {title: "Kick Ass",
				description: "World Domination",
				due_date: "Past Due"
				};

	todoList.push(item1);

	// Completed tasks get crossed out and disappear using method chaining
	$taskOL.on("click", ".item", function(event) {
		$(this).addClass("complete").hide("slow");
	});


});

