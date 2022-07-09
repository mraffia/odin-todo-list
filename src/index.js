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

function todoFinder(id) {
    let todoIdx = 0;
    for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].getId() === id) {
            todoIdx = i;
        }
    }
    return todoIdx;
}

function deleteTodo(id) {
    let todoIdx = todoFinder(id);
    let removedTodo = currentList.splice(todoIdx, 1);
    return removedTodo;
}

function editTodo(id, title, description, dueDate, priority) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setTitle = title;
    currentList[todoIdx].setDescription = description;
    currentList[todoIdx].setDueDate = dueDate;
    currentList[todoIdx].setPriority = priority;
}

function completeTodo(id) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setComplete();
    return currentList[todoIdx];
}

function uncompleteTodo(id) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setUncomplete();
    return currentList[todoIdx];
}

function currentPage() {
    let addExample = addTodo('Bruh');
    console.log(currentList.length);
    deleteTodo(0);
    console.log(currentList.length);
}

currentPage();