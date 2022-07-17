import './style.css';
import PlusMiniSvg from './images/add_mini.svg';
import DoneAllSvg from './images/done_all.svg';
import ProfileSvg from './images/account_circle.svg';
import InboxSvg from './images/inbox.svg';
import ListAltSvg from './images/list_alt.svg';
import TodaySvg from './images/today.svg';
import CheckBoxSvg from './images/check_box.svg';
import Todo from './todo.js';
import { addProject, addTodo, todoFinder, deleteTodo, editTodo, completeTodo, uncompleteTodo } from './index.js';

let listOfProjects = { "Inbox": [], "Today": [] };
let idCounter = 0;

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
const singleTodoLogo = document.createElement('img');
const singleTodoName = document.createElement('div');
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
singleTodoLogo.classList.add('single-todo-logo');
singleTodoName.classList.add('single-todo-name');
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
singleTodoLogo.src = CheckBoxSvg;
singleTodoName.textContent = "Some Task";
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
const formProjectLabel = document.createElement("label");
const formProjectName = document.createElement("input");
const formProjectSubmit = document.createElement("button");
const formProjectCancel = document.createElement("button");

formProjectPopUp.classList.add('form-project-popup');
formProjectContainer.classList.add('form-project-container');
formProjectSubmit.classList.add('btn');
formProjectCancel.classList.add('btn-cancel');

formProjectLabel.setAttribute('for', 'project-name');
formProjectPopUp.setAttribute('id', 'projectForm');
formProjectName.setAttribute('type', 'text');
formProjectName.setAttribute('placeholder', 'Project Name');
formProjectName.setAttribute('name', 'project-name');
formProjectSubmit.setAttribute("type", "submit");
formProjectCancel.setAttribute('type', 'button');

formProjectName.required = true;

formProjectLabel.textContent = "Project Name";
formProjectSubmit.textContent = "Add";
formProjectCancel.textContent = "Cancel";

formProjectContainer.appendChild(formProjectLabel);
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

singleTodoContainer.appendChild(singleTodoLogo);
singleTodoContainer.appendChild(singleTodoName);
addTodoContainer.appendChild(addTodoLogo);
addTodoContainer.appendChild(addTodoName);
todoContainer.appendChild(mainTitle);
todoContainer.appendChild(singleTodoContainer);
todoContainer.appendChild(addTodoContainer);
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
        const key = e.target['project-name'].value;

        if (Object.keys(listOfProjects).length > 6) {
            alert("You can't have more than 5 projects!");
        } else if (key in listOfProjects) {
            alert("You can't have two or more projects with the same name! (case sensitive)");
        } else {
            addProject(listOfProjects, key);
        }

        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
        projectContainer.textContent = '';
        displayAllProjects();
        console.log(listOfProjects);
    });

    return container;
}

function createProject(project) {
    const projectSubContainer = document.createElement('div');
    const projectLogo = document.createElement('img');
    const projectName = document.createElement('div');

    projectSubContainer.classList.add('project-sub-container');
    projectLogo.classList.add('project-logo');
    projectName.classList.add('project-name');

    projectSubContainer.setAttribute('id', project);

    projectLogo.src = ListAltSvg;
    projectName.textContent = project;

    projectSubContainer.appendChild(projectLogo);
    projectSubContainer.appendChild(projectName);

    return projectSubContainer;
}

function displayAllProjects() {
    if (Object.keys(listOfProjects).length > 2) {
        for (const project in listOfProjects) {
            if (project !== "Inbox" && project !== "Today") {
                projectContainer.appendChild(createProject(project, listOfProjects[project]));
            }
        }
    }
}

export default generatePage;