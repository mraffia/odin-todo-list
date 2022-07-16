import './style.css';
import Plus from './images/add.svg';
import PlusMini from './images/add_mini.svg';
import DoneAll from './images/done_all.svg';
import Inbox from './images/inbox.svg';
import List from './images/list_alt.svg';
import Today from './images/today.svg';
import Todo from './todo.js';

function generatePage(pageTitle = 'inbox') {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLogoContainer = document.createElement('div');
    const headerLogo = document.createElement('img');
    const headerLogoName = document.createElement('div');
    const profileContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const addTodoGeneralSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const sidebar = document.createElement('div');
    const sidebarMenuMain= document.createElement('div');
    const sidebarMenu = document.createElement('div');
    const inboxLogo = document.createElement('img');
    const todayLogo = document.createElement('img');
    const sidebarTitle = document.createElement('h3');
    const sidebarMenuProjects = document.createElement('div');
    const projectLogo = document.createElement('img');
    const addProjectContainer = document.createElement('div');
    const addProjectLogo = document.createElement('img');
    const addProjectName = document.createElement('div');

    const mainContent = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const todoContainer = document.createElement('div');
    const singleTodo = document.createElement('div');
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
    addTodoGeneralSvg.classList.add('add-todo-general');

    sidebar.classList.add('sidebar');
    sidebarMenuMain.classList.add('sidebar-menu-main');
    sidebarMenuProjects.classList.add('sidebar-menu-projects');
    sidebarMenu.classList.add('sidebar-menu');
    inboxLogo.classList.add('inbox-logo');
    todayLogo.classList.add('today-logo');
    sidebarTitle.classList.add('sidebar-title');
    projectLogo.classList.add('project-logo');
    addProjectContainer.classList.add('add-project-container');
    addProjectLogo.classList.add('add-project-logo');
    addProjectName.classList.add('add-project-name');

    mainContent.classList.add('main-content');
    mainTitle.classList.add('main-title');
    todoContainer.classList.add('todo-container');
    singleTodo.classList.add('todo');
    addTodoContainer.classList.add('add-todo-container');
    addTodoLogo.classList.add('add-todo-logo');
    addTodoName.classList.add('add-todo-name');

    footer.classList.add('footer');

    headerLogoName.textContent = "Odin Todo List";
}