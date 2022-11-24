import './style.css';
import PlusMiniSvg from './images/add_mini.svg';
import DoneAllSvg from './images/done_all.svg';
import ProfileSvg from './images/account_circle.svg';
import InboxSvg from './images/inbox.svg';
import ListAltSvg from './images/list_alt.svg';
import CheckBoxSvg from './images/check_box.svg';
import CloseSvg from './images/close.svg';
import TodaySvg from './images/today.svg';
import { addTodo, deleteTodo } from './index.js';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

let listOfProjects = { "Inbox": [] };
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
const addProjectContainer = document.createElement('div');
const addProjectLogo = document.createElement('img');
const addProjectName = document.createElement('div');

const mainContent = document.createElement('div');
let mainTitle = document.createElement('h1');
const todoContainer = document.createElement('div');
const singleTodoContainer = document.createElement('div');
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
inboxContainer.setAttribute('id', 'Inbox');
inboxLogo.classList.add('inbox-logo');
inboxName.classList.add('inbox-name');
todayContainer.classList.add('today-container');
todayContainer.setAttribute('id', 'Today');
todayLogo.classList.add('today-logo');
todayName.classList.add('today-name');
sidebarTitle.classList.add('sidebar-title');
projectContainer.classList.add('project-container');
addProjectContainer.classList.add('add-project-container');
addProjectLogo.classList.add('add-project-logo');
addProjectName.classList.add('add-project-name');

mainContent.classList.add('main-content');
mainTitle.classList.add('main-title');
todoContainer.classList.add('todo-container');
singleTodoContainer.classList.add('single-todo-container');
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
addProjectLogo.src = PlusMiniSvg;
addProjectName.textContent = "Add Project";

mainTitle.textContent = currentProjectPage;
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
formProjectName.setAttribute('id', 'project-name');
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

formTodoContainer.appendChild(formTodoName);
formTodoContainer.appendChild(formTodoDuedate);
formTodoContainer.appendChild(formTodoProject);
formTodoContainer.appendChild(formTodoSubmit);
formTodoContainer.appendChild(formTodoCancel);
formTodoPopUp.appendChild(formTodoContainer);

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

// MAIN FUNCTION

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

        generateProjectOptionsTodo();
        generateProjectOptionsSingleTodo();

        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
        projectContainer.textContent = '';
        displayAllProjects();

        populateStorage();
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
        const todoProject = e.target['todo-project'].value;
        let todoDuedate = e.target['todo-duedate'].value;
        if (todoDuedate === '') {
            todoDuedate = "No date";
        }

        const uniqueId = uuidv4();

        addTodo(listOfProjects, uniqueId, todoTitle, todoDuedate, todoProject);

        formTodoContainer.reset()
        formTodoPopUp.style.display = "none";
        singleTodoContainer.textContent = '';
        displayAllTodos(currentProjectPage);

        populateStorage();
    });

    inboxName.addEventListener('click', function(e) {
        const projectTitle = "Inbox";
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodos(projectTitle);
    });

    todayName.addEventListener('click', function(e) {
        const projectTitle = "Today";
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodosToday(projectTitle);
    });

    if (storageAvailable('localStorage')) {
        if(!localStorage.getItem('listOfProjects')) {
            populateStorage();
            setListOfProjectsAndTodos();
        } else {
            setListOfProjectsAndTodos();
        }
    } else {
        console.log('CAN\'T USE localStorage? BRUH');
    }

    displayAllProjects();
    displayAllTodos(currentProjectPage);
    generateProjectOptionsTodo();
    generateProjectOptionsSingleTodo();

    return container;
}

// PROJECTS RELATED FUNCTIONS

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

            generateProjectOptionsTodo();
            generateProjectOptionsSingleTodo();
            
            projectContainer.textContent = '';
            displayAllProjects();

            populateStorage();
        }
    });

    projectName.addEventListener('click', function(e) {
        const projectTitle = e.target.parentElement.id;
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodos(projectTitle);
    });

    projectSubContainer.appendChild(projectLogo);
    projectSubContainer.appendChild(projectName);
    projectSubContainer.appendChild(projectDeleteButton);

    return projectSubContainer;
}

function displayAllProjects() {
    if (Object.keys(listOfProjects).length > 1) {
        for (const project in listOfProjects) {
            if (project !== "Inbox") {
                projectContainer.appendChild(createProjectDisplay(project));
            }
        }
    }
}

// TODOS RELATED FUNCTIONS

function createTodoDisplay(taskIdx, project) {
    const theTodo = listOfProjects[project][taskIdx];

    const singleTodoSubContainer = document.createElement('div');
    const singleTodoLogo = document.createElement('img');
    const singleTodoContent = document.createElement('div');
    const singleTodoName = document.createElement('div');
    const singleTodoProject = document.createElement('div');
    const singleTodoDuedate = document.createElement('div');
    const singleTodoDeleteButton = document.createElement('img');

    singleTodoSubContainer.classList.add('single-todo-sub-container');
    singleTodoContent.classList.add('single-todo-content');
    singleTodoLogo.classList.add('single-todo-logo');
    singleTodoName.classList.add('single-todo-name');
    singleTodoProject.classList.add('single-todo-project');
    singleTodoDuedate.classList.add('single-todo-duedate');
    singleTodoDeleteButton.classList.add('single-todo-delete-button');

    singleTodoSubContainer.setAttribute('id', theTodo.getId());

    singleTodoLogo.src = CheckBoxSvg;
    singleTodoName.textContent = theTodo.getTitle();
    singleTodoProject.textContent = theTodo.getProject();
    singleTodoDuedate.textContent = theTodo.getDuedate();
    singleTodoDeleteButton.src = CloseSvg;

    singleTodoDeleteButton.style.display = "none";

    const formSingleTodoName = document.createElement("input");
    const formSingleTodoProject = document.createElement("select");
    const formSingleTodoDuedate = document.createElement("input");

    formSingleTodoName.classList.add('form-single-todo-name');
    formSingleTodoProject.classList.add('form-single-todo-project');
    formSingleTodoDuedate.classList.add('form-single-todo-duedate');

    formSingleTodoName.setAttribute("type", "text");
    formSingleTodoName.setAttribute('placeholder', 'Task name');
    formSingleTodoName.setAttribute('name', 'single-todo-name');
    formSingleTodoName.setAttribute('value', theTodo.getTitle());
    formSingleTodoProject.setAttribute('name', 'single-todo-project');
    formSingleTodoProject.setAttribute('value', theTodo.getProject());
    formSingleTodoDuedate.setAttribute('type', 'date');
    formSingleTodoDuedate.setAttribute('name', 'single-todo-duedate');
    formSingleTodoDuedate.setAttribute('value', theTodo.getDuedate());

    for (const project in listOfProjects) {
        const formSingleTodoProjectOption = document.createElement("option");
        formSingleTodoProjectOption.setAttribute('value', project);
        formSingleTodoProjectOption.textContent = project;
        formSingleTodoProject.appendChild(formSingleTodoProjectOption);
    }

    formSingleTodoName.style.display = "none";
    formSingleTodoProject.style.display = "none";
    formSingleTodoDuedate.style.display = "none";

    singleTodoSubContainer.addEventListener('mouseover', function (e) {
        singleTodoDeleteButton.style.display = "block";
    });

    singleTodoSubContainer.addEventListener('mouseout', function (e) {
        singleTodoDeleteButton.style.display = "none";
    });

    singleTodoDeleteButton.addEventListener('click', function (e) {
        const todoId = e.target.parentElement.id;
        const confirmDelete = confirm("Are you sure you want to delete the task?");
        if (confirmDelete) {
            deleteTodo(listOfProjects, currentProjectPage, todoId);

            singleTodoContainer.textContent = '';
            displayAllTodos(currentProjectPage);

            populateStorage();
        }
    });

    singleTodoName.addEventListener('click', function(e) {
        singleTodoName.style.display = "none";
        formSingleTodoName.style.display = "block";
    });

    formSingleTodoName.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoName.style.display === "block") {
            let newTitle = formSingleTodoName.value;

            theTodo.setTitle(newTitle);
            singleTodoName.textContent = newTitle;
            singleTodoName.style.display = "block";
            formSingleTodoName.style.display = "none";

            populateStorage();
        }
    });

    singleTodoProject.addEventListener('click', function(e) {
        singleTodoProject.style.display = "none";
        formSingleTodoProject.style.display = "block";
    });

    formSingleTodoProject.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoProject.style.display === "block") {
            let newProject = formSingleTodoProject.value;

            theTodo.setProject(newProject);
            singleTodoProject.textContent = newProject;
            singleTodoProject.style.display = "block";
            formSingleTodoProject.style.display = "none";

            let movedTodo = deleteTodo(listOfProjects, project, theTodo.getId());
            addTodo(listOfProjects, movedTodo[0].getId(), movedTodo[0].getTitle(), movedTodo[0].getDuedate(), newProject);

            if (currentProjectPage === "Today") {
                singleTodoContainer.textContent = '';
                displayAllTodosToday();
            } else {
                singleTodoContainer.textContent = '';
                displayAllTodos(currentProjectPage);
            }

            populateStorage();
        }
    });

    singleTodoDuedate.addEventListener('click', function(e) {
        singleTodoDuedate.style.display = "none";
        formSingleTodoDuedate.style.display = "block";
    });

    formSingleTodoDuedate.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoDuedate.style.display === "block") {
            let newDuedate = formSingleTodoDuedate.value;
            if (newDuedate === '') {
                newDuedate = 'No date'
            } 

            theTodo.setDuedate(newDuedate);
            singleTodoDuedate.textContent = newDuedate;
            singleTodoDuedate.style.display = "block";
            formSingleTodoDuedate.style.display = "none";

            if (currentProjectPage === "Today") {
                singleTodoContainer.textContent = '';
                displayAllTodosToday();
            }

            populateStorage();
        }
    });

    singleTodoLogo.addEventListener('click', function(e) {
        theTodo.setComplete();
        singleTodoContainer.textContent = '';
        displayAllTodos(project);

        populateStorage();
    });

    singleTodoContent.appendChild(singleTodoName);
    singleTodoContent.appendChild(formSingleTodoName);
    singleTodoContent.appendChild(singleTodoProject);
    singleTodoContent.appendChild(formSingleTodoProject);
    singleTodoContent.appendChild(singleTodoDuedate);
    singleTodoContent.appendChild(formSingleTodoDuedate);
    singleTodoSubContainer.appendChild(singleTodoLogo);
    singleTodoSubContainer.appendChild(singleTodoContent);
    singleTodoSubContainer.appendChild(singleTodoDeleteButton);

    return singleTodoSubContainer;
}

function displayAllTodos(project) {
    for (let i = 0; i < listOfProjects[project].length; i++) {
        if (listOfProjects[project][i].getStatus() === false && currentProjectPage === project) {
            singleTodoContainer.appendChild(createTodoDisplay(i, project));
        }
    }
}


function displayAllTodosToday() {
    for (const project in listOfProjects) {
        for (let i = 0; i < listOfProjects[project].length; i++) {
            let todoDate = new Date(listOfProjects[project][i].getDuedate()).toDateString();
            let today = new Date().toDateString();

            if (todoDate === today) {
                singleTodoContainer.appendChild(createTodoDisplay(i, project));
            }
        }
    }
}

function generateProjectOptionsTodo() {
    formTodoProject.textContent = '';

    for (const project in listOfProjects) {
        const formTodoProjectOption = document.createElement("option");
        formTodoProjectOption.setAttribute('value', project);
        formTodoProjectOption.textContent = project;
        if (project === "Inbox") {
            formTodoProjectOption.selected = true;
        }

        formTodoProject.appendChild(formTodoProjectOption);
    }
}

function generateProjectOptionsSingleTodo() {
    const formSingleTodoProject = document.querySelector('.form-single-todo-project');

    if (formSingleTodoProject) {
        formSingleTodoProject.textContent  = '';
    }

    for (const project in listOfProjects) {
        const formTodoProjectOption = document.createElement("option");
        formTodoProjectOption.setAttribute('value', project);
        formTodoProjectOption.textContent = project;

        if (formSingleTodoProject) {
            formSingleTodoProject.appendChild(formTodoProjectOption);
        }
    }
}

// localStorage RELATED FUNCTIONS

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

async function populateStorage() {
    localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));

    try {
        for (const key in listOfProjects) {
            for (let i = 0; i < listOfProjects[key].length; i++) {
                await setDoc(doc(getFirestore(), key, listOfProjects[key][i].getId()), {
                    todoId: listOfProjects[key][i].getId(),
                    todoTitle: listOfProjects[key][i].getTitle(),
                    todoDuedate: listOfProjects[key][i].getDuedate(),
                    todoProject: listOfProjects[key][i].getProject(),
                    todoCompleteStatus: listOfProjects[key][i].getStatus(),
                });
            }
        }
    }
    catch(error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}

function setListOfProjectsAndTodos() {
    let listOfProjectsJSON = JSON.parse(localStorage.getItem('listOfProjects'));

    for (const project in listOfProjectsJSON) {
        listOfProjects[project] = [];
        for (let i = 0; i < listOfProjectsJSON[project].length; i++) {
            const todoId = listOfProjectsJSON[project][i]["todoId"];
            const todoTitle = listOfProjectsJSON[project][i]["todoTitle"];
            const todoDuedate = listOfProjectsJSON[project][i]["todoDuedate"];
            const todoProject = listOfProjectsJSON[project][i]["todoProject"];
            const todoCompleteStatus = listOfProjectsJSON[project][i]["todoCompleteStatus"];
            addTodo(listOfProjects, todoId, todoTitle, todoDuedate, todoProject, todoCompleteStatus);
        }
    }
}

export default generatePage;