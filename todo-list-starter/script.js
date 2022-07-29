let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoList = document.getElementById("todo-list");

todoTasksText.forEach((task, index) => {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTasksStatus[index] == true) {
        newTodoTaskElement.classList.add("complete")
    }

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    }
    newTodoTaskElement.appendChild(completeButtonElement);

    todoList.appendChild(newTodoTaskElement);

})

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    console.log(todoTasksStatus);
}

function addTask() { }

function updateTodoList() { }

function createNewTodoItemElement(todoItem, index) { }

function toggleComplete(index) { }
