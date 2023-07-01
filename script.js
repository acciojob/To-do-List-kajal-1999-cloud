// // Get references to the input field, button, and todo list
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Function to add a new todo item
function addTodo() {
  // Get the value from the input field
  const todoText = newTodoInput.value.trim();

  // Validate if the todo item is not empty
  if (todoText !== "") {
    // Create a new list item
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todoText;

    // Append the new item to the todo list
    todoList.appendChild(newTodoItem);

    // Clear the input field
    newTodoInput.value = "";
  }
}

// Event listener for the add todo button click
addTodoBtn.addEventListener("click", addTodo);

// Event listener for the enter key press in the input field
newTodoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
