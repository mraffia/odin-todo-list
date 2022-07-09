import './style.css';
import Todo from './todo.js';

let currentList = [];
let idCounter = 0;

function addTodo(title, description = null, dueDate = null, priority = 4) {
    const newTodo = Todo(idCounter, title, description, dueDate, priority);
    idCounter++;
    currentList.push(newTodo);
    return newTodo;
}

function deleteTodo(id) {
    let todoIdx = 0;
    for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].getId() === id) {
            todoIdx = i;
        }
    }
    let removedTodo = currentList.splice(todoIdx, 1);
    return removedTodo;
}

function currentPage() {
    let addExample = addTodo('Bruh');
    console.log(currentList.length);
    deleteTodo(0);
    console.log(currentList.length);
}

currentPage();