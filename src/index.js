import './style.css';
import Todo from './todo.js';
import generatePage from './page.js';

let listOfProjects = {
    "Inbox": [],
    "Today": [],
};
let idCounter = 0;

function addProject(project) {
    let projectName = project[0].toUpperCase() + project.slice(1).toLowerCase();
    listOfProjects[projectName] = [];
}

function addTodo(title, description = null, dueDate = null, priority = 4, project = 'Inbox') {
    let projectName = project[0].toUpperCase() + project.slice(1).toLowerCase();

    const newTodo = Todo(idCounter, title, description, dueDate, priority, projectName);
    idCounter++;
    listOfProjects[projectName].push(newTodo);

    return newTodo;
}

function todoFinder(project, id) {
    let todoIdx = 0;
    for (let i = 0; i < project.length; i++) {
        if (listOfProjects[project][i].getId() === id) {
            todoIdx = i;
        }
    }
    return todoIdx;
}

function deleteTodo(project, id) {
    let todoIdx = todoFinder(id);
    let removedTodo = listOfProjects[project].splice(todoIdx, 1);
    return removedTodo;
}

function editTodo(project, id, title, description, dueDate, priority, newProject) {
    let todoIdx = todoFinder(id);
    listOfProjects[project][todoIdx].setTitle(title);
    listOfProjects[project][todoIdx].setDescription(description);
    listOfProjects[project][todoIdx].setDueDate(dueDate);
    listOfProjects[project][todoIdx].setPriority(priority);
    listOfProjects[project][todoIdx].setProject(newProject);
}

function completeTodo(project, id) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setComplete();
    return listOfProjects[project][todoIdx];
}

function uncompleteTodo(project, id) {
    let todoIdx = todoFinder(id);
    listOfProjects[project][todoIdx].setUncomplete();
    return listOfProjects[project][todoIdx];
}

function currentPage() {
    document.body.appendChild(generatePage());
}

currentPage();

export {
    listOfProjects,
    idCounter,
    addProject,
    addTodo,
    todoFinder,
    deleteTodo,
    editTodo,
    completeTodo,
    uncompleteTodo
}