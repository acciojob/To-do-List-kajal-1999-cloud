//your code here
// getting the refernce using id 
const todoInput = document.getElementById("newTodoInput") ;
const todoBtn = document.getElementById("addTodoBtn") ;
const todoList = document.getElementById("todoList") ;

// take input on click of button
todoBtn.addEventListener(click, () =>{
	// taking input from the user
const todoItem = todoInput.value.trim() ;
	// if string is not empty
	if(todoItem !== ''){
		// creating an element
		const todoText = document.createElement("li") ;
		
		todoText.textContent = todoItem ;
	}
	todoList.appendChild(todoText) ;
// creating space for ne Inout
	todoInput = '';
	
});
