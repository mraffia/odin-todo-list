import './style.css';
import Todo from './todo.js';
import generatePage from './page.js';

function addTodo(listOfProjects, id, title, duedate = '', project = 'Inbox', completeStatus = false) {
    const newTodo = Todo(id, title, duedate, project, completeStatus);
    listOfProjects[project].push(newTodo);

    return newTodo;
}

function todoFinder(listOfProjects, project, id) {
    let todoIdx = 0;
    for (let i = 0; i < listOfProjects[project].length; i++) {
        if (listOfProjects[project][i].getId() === Number(id)) {
            todoIdx = i;
        }
    }
    return todoIdx;
}

function deleteTodo(listOfProjects, project, id) {
    let todoIdx = todoFinder(listOfProjects, project, id);

    let removedTodo = listOfProjects[project].splice(todoIdx, 1);
    return removedTodo;
}

function editTodo(listOfProjects, project, id, title, duedate, newProject) {
    let todoIdx = todoFinder(id);
    listOfProjects[project][todoIdx].setTitle(title);
    listOfProjects[project][todoIdx].setDuedate(duedate);
    listOfProjects[project][todoIdx].setProject(newProject);
}

function completeTodo(listOfProjects, project, id) {
    let todoIdx = todoFinder(id);
    currentList[todoIdx].setComplete();
    return listOfProjects[project][todoIdx];
}

function uncompleteTodo(listOfProjects, project, id) {
    let todoIdx = todoFinder(id);
    listOfProjects[project][todoIdx].setUncomplete();
    return listOfProjects[project][todoIdx];
}

function currentPage() {
    document.body.appendChild(generatePage());
}

currentPage();

export {
    addTodo,
    todoFinder,
    deleteTodo,
    editTodo,
    completeTodo,
    uncompleteTodo
}