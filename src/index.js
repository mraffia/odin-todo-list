import './style.css';
import Todo from './todo.js';

let currentList = [];
let idCounter = 0;

function addTodo(title, description = null, dueDate = null, priority = 4, project = 'inbox') {
    const newTodo = Todo(idCounter, title, description, dueDate, priority, project);
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

function editTodo(id, title, description, dueDate, priority, project) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setTitle(title);
    currentList[todoIdx].setDescription(description);
    currentList[todoIdx].setDueDate(dueDate);
    currentList[todoIdx].setPriority(priority);
    currentList[todoIdx].setProject(project);
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
    return;
}

currentPage();