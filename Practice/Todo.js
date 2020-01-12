var todos=["Buy New Turtle"];
var input=prompt("What do you like to do?");

while(input!== "quit"){
	if (input ==="list") {
		listTodos();
		
		
	}else if (input==="new") {
		newTodos();
		// var newTodos=prompt("Enter a new todo");
		// todos.push(newTodos);
	}else if(input==="delete"){
		deleted();
		// var index=prompt("Enter the index todo be deleted");
		// todos.splice(index,1);
		// console.log("Delected todo index number" + index);
	}

var input=prompt("What would you like to dooo?");
}
console.log("Ok, YOU QUITED THE APP");

function listTodos(){
	console.log("************");
		todos.forEach(function(todo, i){

		console.log(i +": "+ todo);
		});
		console.log("************");

}

function newTodos(){
	var newTodos=prompt("Enter a new todo");
		todos.push(newTodos);
}

function deleted(){
	var index=prompt("Enter the index todo be deleted");
		todos.splice(index,1);
		console.log("Delected todo index number" + index);
}