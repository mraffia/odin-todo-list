import './style.css';
import PlusMiniSvg from './images/add_mini.svg';
import DoneAllSvg from './images/done_all.svg';
import ProfileSvg from './images/account_circle.svg';
import InboxSvg from './images/inbox.svg';
import ListAltSvg from './images/list_alt.svg';
import TodaySvg from './images/today.svg';
import CheckBoxSvg from './images/check_box.svg';
import CloseSvg from './images/close.svg';
import Todo from './todo.js';
import { addTodo, todoFinder, deleteTodo, editTodo, completeTodo, uncompleteTodo } from './index.js';

let listOfProjects = { "Inbox": [], "Today": [] };
let todoIds = 0;
let currentProjectPage = "Inbox";

const container = document.createElement('div');
const header = document.createElement('div');
const headerLogoContainer = document.createElement('div');
const headerLogo = document.createElement('img');
const headerLogoName = document.createElement('div');
const profileContainer = document.createElement('div');
const profilePic = document.createElement('img');

const sidebar = document.createElement('div');
const sidebarMenuMain= document.createElement('div');
const sidebarMenuProjects = document.createElement('div');
const inboxContainer = document.createElement('div');
const inboxLogo = document.createElement('img');
const inboxName = document.createElement('div');
const todayContainer = document.createElement('div');
const todayLogo = document.createElement('img');
const todayName = document.createElement('div');
const sidebarTitle = document.createElement('h3');
const projectContainer = document.createElement('div');
// const projectLogo = document.createElement('img');
// const projectName = document.createElement('div');
const addProjectContainer = document.createElement('div');
const addProjectLogo = document.createElement('img');
const addProjectName = document.createElement('div');

const mainContent = document.createElement('div');
const mainTitle = document.createElement('h1');
const todoContainer = document.createElement('div');
const singleTodoContainer = document.createElement('div');
// const singleTodoLogo = document.createElement('img');
// const singleTodoName = document.createElement('div');
const addTodoContainer = document.createElement('div');
const addTodoLogo = document.createElement('img');
const addTodoName = document.createElement('div');

const footer = document.createElement('div');

container.classList.add('container');
header.classList.add('header');
headerLogoContainer.classList.add('header-logo-container');
headerLogo.classList.add('header-logo');
headerLogoName.classList.add('header-logo-name');
profileContainer.classList.add('profile-container');
profilePic.classList.add('profile-pic');

sidebar.classList.add('sidebar');
sidebarMenuMain.classList.add('sidebar-menu-main');
sidebarMenuProjects.classList.add('sidebar-menu-projects');
inboxContainer.classList.add('inbox-container');
inboxLogo.classList.add('inbox-logo');
inboxName.classList.add('inbox-name');
todayContainer.classList.add('today-container');
todayLogo.classList.add('today-logo');
todayName.classList.add('today-name');
sidebarTitle.classList.add('sidebar-title');
projectContainer.classList.add('project-container');
// projectLogo.classList.add('project-logo');
// projectName.classList.add('project-name');
addProjectContainer.classList.add('add-project-container');
addProjectLogo.classList.add('add-project-logo');
addProjectName.classList.add('add-project-name');

mainContent.classList.add('main-content');
mainTitle.classList.add('main-title');
todoContainer.classList.add('todo-container');
singleTodoContainer.classList.add('single-todo-container');
// singleTodoLogo.classList.add('single-todo-logo');
// singleTodoName.classList.add('single-todo-name');
addTodoContainer.classList.add('add-todo-container');
addTodoLogo.classList.add('add-todo-logo');
addTodoName.classList.add('add-todo-name');

footer.classList.add('footer');

headerLogo.src = DoneAllSvg;
headerLogoName.textContent = "Odin Todo List";
profilePic.src = ProfileSvg;

inboxLogo.src = InboxSvg;
inboxName.textContent = "Inbox";
todayLogo.src = TodaySvg;
todayName.textContent = "Today";
sidebarTitle.textContent = "Projects";
// projectLogo.src = ListAltSvg;
// projectName.textContent = "Some Project";
addProjectLogo.src = PlusMiniSvg;
addProjectName.textContent = "Add Project";

mainTitle.textContent = "Inbox";
// singleTodoLogo.src = CheckBoxSvg;
// singleTodoName.textContent = "Some Task";
addTodoLogo.src = PlusMiniSvg;
addTodoName.textContent = "Add Task";

footer.innerHTML = 'By yours truly,&nbsp;<a href="https://github.com/mraffia"> mraffia</a>';

headerLogoContainer.appendChild(headerLogo);
headerLogoContainer.appendChild(headerLogoName);
profileContainer.appendChild(profilePic);
header.appendChild(headerLogoContainer);
header.appendChild(profileContainer);

const formProjectPopUp = document.createElement('div');
const formProjectContainer = document.createElement("form");
const formProjectName = document.createElement("input");
const formProjectSubmit = document.createElement("button");
const formProjectCancel = document.createElement("button");

formProjectPopUp.classList.add('form-project-popup');
formProjectContainer.classList.add('form-project-container');
formProjectSubmit.classList.add('btn');
formProjectCancel.classList.add('btn-cancel');

formProjectPopUp.setAttribute('id', 'projectPopUpForm');
formProjectName.setAttribute('type', 'text');
formProjectName.setAttribute('placeholder', 'Project Name');
formProjectName.setAttribute('name', 'project-name');
formProjectSubmit.setAttribute("type", "submit");
formProjectCancel.setAttribute('type', 'button');

formProjectName.required = true;

formProjectSubmit.textContent = "Add";
formProjectCancel.textContent = "Cancel";

formProjectContainer.appendChild(formProjectName);
formProjectContainer.appendChild(formProjectSubmit);
formProjectContainer.appendChild(formProjectCancel);
formProjectPopUp.appendChild(formProjectContainer);

inboxContainer.appendChild(inboxLogo);
inboxContainer.appendChild(inboxName);
todayContainer.appendChild(todayLogo);
todayContainer.appendChild(todayName);
// projectContainer.appendChild(projectLogo);
// projectContainer.appendChild(projectName);
addProjectContainer.appendChild(addProjectLogo);
addProjectContainer.appendChild(addProjectName);
sidebarMenuMain.appendChild(inboxContainer);
sidebarMenuMain.appendChild(todayContainer);
sidebarMenuProjects.appendChild(sidebarTitle);
sidebarMenuProjects.appendChild(projectContainer);
sidebarMenuProjects.appendChild(addProjectContainer);
sidebarMenuProjects.appendChild(formProjectPopUp);
sidebar.appendChild(sidebarMenuMain);
sidebar.appendChild(sidebarMenuProjects);

const formTodoPopUp = document.createElement('div');
const formTodoContainer = document.createElement("form");
const formTodoName = document.createElement("input");
const formTodoDuedate = document.createElement("input");
const formTodoProject = document.createElement("select");
const formTodoSubmit = document.createElement("button");
const formTodoCancel = document.createElement("button");

formTodoPopUp.classList.add('form-todo-popup');
formTodoContainer.classList.add('form-todo-container');
formTodoSubmit.classList.add('btn');
formTodoCancel.classList.add('btn-cancel');

formTodoPopUp.setAttribute('id', 'todoPopUpForm');
formTodoName.setAttribute('type', 'text');
formTodoName.setAttribute('placeholder', 'Task name');
formTodoName.setAttribute('name', 'todo-name');
formTodoName.setAttribute('id', 'todo-name');
formTodoDuedate.setAttribute('type', 'date');
formTodoDuedate.setAttribute('name', 'todo-duedate');;
formTodoDuedate.setAttribute('id', 'todo-duedate');
formTodoProject.setAttribute('name', 'todo-project');
formTodoProject.setAttribute('id', 'todo-project');
formTodoSubmit.setAttribute("type", "submit");
formTodoCancel.setAttribute('type', 'button');

formTodoName.required = true;

formTodoSubmit.textContent = "Add";
formTodoCancel.textContent = "Cancel";

for (const project in listOfProjects) {
    const formTodoProjectOption = document.createElement("option");
    formTodoProjectOption.setAttribute('value', project);
    formTodoProjectOption.textContent = project;
    if (project === 'Inbox') {
        formTodoProjectOption.selected = true;
    }
    formTodoProject.appendChild(formTodoProjectOption);
}

formTodoContainer.appendChild(formTodoName);
formTodoContainer.appendChild(formTodoDuedate);
formTodoContainer.appendChild(formTodoProject);
formTodoContainer.appendChild(formTodoSubmit);
formTodoContainer.appendChild(formTodoCancel);
formTodoPopUp.appendChild(formTodoContainer);

// singleTodoContainer.appendChild(singleTodoLogo);
// singleTodoContainer.appendChild(singleTodoName);
addTodoContainer.appendChild(addTodoLogo);
addTodoContainer.appendChild(addTodoName);
todoContainer.appendChild(mainTitle);
todoContainer.appendChild(singleTodoContainer);
todoContainer.appendChild(addTodoContainer);
todoContainer.appendChild(formTodoPopUp);
mainContent.appendChild(todoContainer);

container.appendChild(header);
container.appendChild(sidebar);
container.appendChild(mainContent);
container.appendChild(footer);

function generatePage() {
    addProjectContainer.addEventListener('click', function (e) {
        if (formProjectPopUp.style.display === 'block') {
            formProjectPopUp.style.display = 'none';
        } else {
            formProjectPopUp.style.display = 'block';
        }
    });

    formProjectCancel.addEventListener('click', function (e) {
        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
    });

    formProjectContainer.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectTitle = e.target['project-name'].value;

        if (Object.keys(listOfProjects).length > 6) {
            alert("You can't have more than 5 projects!");
        } else if (projectTitle in listOfProjects) {
            alert("You can't have two or more projects with the same name! (case sensitive)");
        } else {
            listOfProjects[projectTitle] = [];
        }

        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
        projectContainer.textContent = '';
        displayAllProjects();
        console.log(listOfProjects);
    });

    addTodoContainer.addEventListener('click', function (e) {
        if (formTodoPopUp.style.display === 'block') {
            formTodoPopUp.style.display = 'none';
        } else {
            formTodoPopUp.style.display = 'block';
        }
    });

    formTodoCancel.addEventListener('click', function (e) {
        formTodoContainer.reset()
        formTodoPopUp.style.display = "none";
    });

    formTodoContainer.addEventListener('submit', function (e) {
        e.preventDefault();
        const todoTitle = e.target['todo-name'].value;
        const todoDuedate = e.target['todo-duedate'].value;
        const todoProject = e.target['todo-project'].value;

        addTodo(listOfProjects, todoIds, todoTitle, todoDuedate, todoProject);
        todoIds++;

        formTodoContainer.reset()
        formTodoPopUp.style.display = "none";
        singleTodoContainer.textContent = '';
        displayAllTodos(todoProject);
        console.log(listOfProjects);
    });

    return container;
}

function createProjectDisplay(project) {
    const projectSubContainer = document.createElement('div');
    const projectLogo = document.createElement('img');
    const projectName = document.createElement('div');
    const projectDeleteButton = document.createElement('img');

    projectSubContainer.classList.add('project-sub-container');
    projectLogo.classList.add('project-logo');
    projectName.classList.add('project-name');
    projectDeleteButton.classList.add('project-delete-button');

    projectSubContainer.setAttribute('id', project);

    projectLogo.src = ListAltSvg;
    projectName.textContent = project;
    projectDeleteButton.src = CloseSvg;

    projectDeleteButton.style.display = "none";

    projectSubContainer.addEventListener('mouseover', function (e) {
        projectDeleteButton.style.display = "block";
    });

    projectSubContainer.addEventListener('mouseout', function (e) {
        projectDeleteButton.style.display = "none";
    });

    projectDeleteButton.addEventListener('click', function (e) {
        const projectTitle = e.target.parentElement.id;
        const confirmDelete = confirm("Are you sure you want to delete the project \"" + projectTitle + "\"?");
        if (confirmDelete) {
            delete listOfProjects[projectTitle];
            projectContainer.textContent = '';
            displayAllProjects();
            console.log(listOfProjects);
        }
    });

    projectSubContainer.appendChild(projectLogo);
    projectSubContainer.appendChild(projectName);
    projectSubContainer.appendChild(projectDeleteButton);

    return projectSubContainer;
}

function displayAllProjects() {
    if (Object.keys(listOfProjects).length > 2) {
        for (const project in listOfProjects) {
            if (project !== "Inbox" && project !== "Today") {
                projectContainer.appendChild(createProjectDisplay(project));
            }
        }
    }
}

function createTodoDisplay(taskIdx, project) {
    const theTodo = listOfProjects[project][taskIdx];
    const singleTodoSubContainer = document.createElement('div');
    const singleTodoLogo = document.createElement('img');
    const singleTodoName = document.createElement('div');
    const singleTodoDuedate = document.createElement('div');
    const singleTodoDeleteButton = document.createElement('img');

    singleTodoSubContainer.classList.add('single-todo-sub-container');
    singleTodoLogo.classList.add('single-todo-logo');
    singleTodoName.classList.add('single-todo-name');
    singleTodoDuedate.classList.add('single-todo-duedate');
    singleTodoDeleteButton.classList.add('single-todo-delete-button');

    singleTodoSubContainer.setAttribute('id', theTodo.getId());

    singleTodoLogo.src = CheckBoxSvg;
    singleTodoName.textContent = theTodo.getTitle();
    singleTodoDuedate.textContent = theTodo.getDuedate();
    singleTodoDeleteButton.src = CloseSvg;

    singleTodoDeleteButton.style.display = "none";

    singleTodoSubContainer.addEventListener('mouseover', function (e) {
        singleTodoDeleteButton.style.display = "block";
    });

    singleTodoSubContainer.addEventListener('mouseout', function (e) {
        singleTodoDeleteButton.style.display = "none";
    });

    singleTodoDeleteButton.addEventListener('click', function (e) {
        const todoId = e.target.parentElement.id;
        console.log(e.target.parentElement.id);
        const confirmDelete = confirm("Are you sure you want to delete the task?");
        if (confirmDelete) {
            deleteTodo(listOfProjects, currentProjectPage, todoId);

            singleTodoContainer.textContent = '';
            displayAllTodos(currentProjectPage);
            console.log(listOfProjects);
        }
    });

    singleTodoSubContainer.appendChild(singleTodoLogo);
    singleTodoSubContainer.appendChild(singleTodoName);
    singleTodoSubContainer.appendChild(singleTodoDuedate);
    singleTodoSubContainer.appendChild(singleTodoDeleteButton);

    return singleTodoSubContainer;
}

function displayAllTodos(project) {
    // const formSingleTodoPopUp = document.createElement('div');
    // const formSingleTodoContainer = document.createElement("form");
    // const formSingleTodoName = document.createElement("input");
    // const formSingleTodoDuedate = document.createElement("input");
    // const formSingleTodoProject = document.createElement("select");
    // const formSingleTodoSubmit = document.createElement("button");
    // const formSingleTodoCancel = document.createElement("button");

    // formSingleTodoPopUp.classList.add('form-single-todo-popup');
    // formSingleTodoContainer.classList.add('form-single-todo-container');
    // formSingleTodoSubmit.classList.add('btn');
    // formSingleTodoCancel.classList.add('btn-cancel');
    // formSingleTodoName.classList.add('form-single-todo-name');
    // formSingleTodoDuedate.classList.add('form-single-todo-duedate');
    // formSingleTodoProject.classList.add('form-single-todo-project');

    // formSingleTodoName.setAttribute('type', 'text');
    // formSingleTodoName.setAttribute('placeholder', 'Task name');
    // formSingleTodoName.setAttribute('name', 'single-todo-name');
    // formSingleTodoDuedate.setAttribute('type', 'date');
    // formSingleTodoDuedate.setAttribute('name', 'single-todo-duedate');
    // formSingleTodoProject.setAttribute('name', 'single-todo-project');
    // formSingleTodoSubmit.setAttribute("type", "submit");
    // formSingleTodoCancel.setAttribute('type', 'button');

    // formSingleTodoName.required = true;

    // formSingleTodoSubmit.textContent = "Add";
    // formSingleTodoCancel.textContent = "Cancel";

    // for (const project in listOfProjects) {
    //     const formSingleTodoProjectOption = document.createElement("option");
    //     formSingleTodoProjectOption.setAttribute('value', project);
    //     formSingleTodoProjectOption.textContent = project;
    //     formSingleTodoProject.appendChild(formSingleTodoProjectOption);
    // }

    // formSingleTodoContainer.appendChild(formSingleTodoName);
    // formSingleTodoContainer.appendChild(formSingleTodoDuedate);
    // formSingleTodoContainer.appendChild(formSingleTodoProject);
    // formSingleTodoContainer.appendChild(formSingleTodoSubmit);
    // formSingleTodoContainer.appendChild(formSingleTodoCancel);
    // formSingleTodoPopUp.appendChild(formSingleTodoContainer);

    // singleTodoContainer.addEventListener('click', function (e) {
    //     if (formSingleTodoPopUp.style.display === 'block') {
    //         formSingleTodoPopUp.style.display = 'none';
    //     } else {
    //         formSingleTodoPopUp.style.display = 'block';
    //     }
    // });

    // formSingleTodoCancel.addEventListener('click', function (e) {
    //     formSingleTodoContainer.reset()
    //     formSingleTodoPopUp.style.display = "none";
    // });

    for (let i = 0; i < listOfProjects[project].length; i++) {
        singleTodoContainer.appendChild(createTodoDisplay(i, project));

        // const theTodo = listOfProjects[project][i];
        // formSingleTodoName.setAttribute('value', theTodo.getTitle());
        // formSingleTodoDuedate.setAttribute('value', theTodo.getDuedate());
        // formSingleTodoProject.setAttribute('value', theTodo.getProject());

        singleTodoContainer.appendChild(formSingleTodoPopUp);
    }
}

export default generatePage;