let usersTodo = document.querySelector("input#todo")
let createBtn = document.querySelector("#createBtn")
let viewTodos = document.querySelector(".view")
let numCompleted = document.querySelector("#num-completed")

let defaultCount = 0

function createTodo() {
    let todo = document.createElement("p")
    todo.textContent = usersTodo.value
    viewTodos.appendChild(todo)
}

function countCompletedTodos() {
    numCompleted.textContent = defaultCount
}

countCompletedTodos()

createBtn.addEventListener("click", createTodo)