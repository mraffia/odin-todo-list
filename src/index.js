import './style.css';
import Todo from './todo.js';

let currentList = [];

function addTodo(title, description = null, dueDate = null, priority = 4) {
    const newTodo = Todo(title, description, dueDate, priority);
    currentList.push(newTodo);
    return newTodo;
}

function currentPage() {
    let addExample = addTodo('Bruh');
    console.log(addExample.getTitle());
    console.log(currentList);
}

currentPage();