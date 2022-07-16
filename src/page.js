import './style.css';
import Todo from './todo.js';

function generatePage(projectPage = 'inbox') {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLogoContainer = document.createElement('div');
    const headerLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const headerLogoName = document.createElement('div');
    const profileContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const addTodoGeneral = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const sidebar = document.createElement('div');
    const sidebarMenuMainContainer = document.createElement('div');
    const sidebarMenu = document.createElement('div');
    const inboxLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const todayLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const sidebarTitle = document.createElement('h3');
    const sidebarMenuProjectsContainer = document.createElement('div');
    const projectLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addProjectContainer = document.createElement('div');
    const addProjectLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addProjectName = document.createElement('div');

    const mainContent = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const todoContainer = document.createElement('div');
    const singleTodo = document.createElement('div');
    const addTodoContainer = document.createElement('div');
    const addTodoLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addTodoName = document.createElement('div');

    container.classList.add('container');
    header.classList.add('header');
    headerLogoContainer.classList.add('header-logo-container');
    headerLogo.classList.add('header-logo');
    headerLogoName.classList.add('header-logo-name');
    profileContainer.classList.add('profile-container');
    profilePic.classList.add('profile-pic');
    addTodoGeneral.classList.add('add-todo-general');

    sidebar.classList.add('sidebar');
    sidebarMenuMainContainer.classList.add('sidebar-menu-main-container');
    sidebarMenuProjectsContainer.classList.add('sidebar-menu-projects-container');
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


}