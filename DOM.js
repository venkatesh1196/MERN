let todoIndex = 1;
function todo() {
  // write the code that reads the content from the input box
  const element = document.getElementById("todoInput");
  const todo = element.value;
  if(element.value === ""){
    return;
  }
  element.value = "";

  // create a new todo on the html dom
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id","todo" + todoIndex);
  //   div.innerHTML = "<span>"+ todo +"</span>  <button> delete </button>";
  const todoSpan = document.createElement("span");
  todoSpan.innerHTML = todo;
  todoDiv.appendChild(todoSpan);

  const todoButton = document.createElement("button")
  todoButton.innerHTML = "Delete todo"
  todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");
  todoDiv.appendChild(todoButton);

  document.getElementById("todos").appendChild(todoDiv);
  // parentDiv.appendChild(todoDiv);
  todoIndex = todoIndex + 1;
}

function deleteTodo(index) {
    // alert("deleteTodo called");
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
}
