import './style.css';
import Todo from './todo.js';

function generatePage(projectPage = 'inbox') {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLogoContainer = document.createElement('div');
    const headerLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const headerLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const headerLogoName = document.createElement('div');
    const profileContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const addTodoGeneralSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addTodoGeneralPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const sidebar = document.createElement('div');
    const sidebarMenuMain= document.createElement('div');
    const sidebarMenu = document.createElement('div');
    const inboxLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const inboxLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const todayLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const todayLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const sidebarTitle = document.createElement('h3');
    const sidebarMenuProjects = document.createElement('div');
    const projectLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const projectLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const addProjectContainer = document.createElement('div');
    const addProjectLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addProjectLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const addProjectName = document.createElement('div');

    const mainContent = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const todoContainer = document.createElement('div');
    const singleTodo = document.createElement('div');
    const addTodoContainer = document.createElement('div');
    const addTodoLogoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addTodoLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const addTodoName = document.createElement('div');

    const footer = document.createElement('div');

    container.classList.add('container');
    header.classList.add('header');
    headerLogoContainer.classList.add('header-logo-container');
    headerLogoSvg.classList.add('header-logo');
    headerLogoName.classList.add('header-logo-name');
    profileContainer.classList.add('profile-container');
    profilePic.classList.add('profile-pic');
    addTodoGeneralSvg.classList.add('add-todo-general');

    sidebar.classList.add('sidebar');
    sidebarMenuMain.classList.add('sidebar-menu-main');
    sidebarMenuProjects.classList.add('sidebar-menu-projects');
    sidebarMenu.classList.add('sidebar-menu');
    inboxLogoSvg.classList.add('inbox-logo');
    todayLogoSvg.classList.add('today-logo');
    sidebarTitle.classList.add('sidebar-title');
    projectLogoSvg.classList.add('project-logo');
    addProjectContainer.classList.add('add-project-container');
    addProjectLogoSvg.classList.add('add-project-logo');
    addProjectName.classList.add('add-project-name');

    mainContent.classList.add('main-content');
    mainTitle.classList.add('main-title');
    todoContainer.classList.add('todo-container');
    singleTodo.classList.add('todo');
    addTodoContainer.classList.add('add-todo-container');
    addTodoLogoSvg.classList.add('add-todo-logo');
    addTodoName.classList.add('add-todo-name');

    footer.classList.add('footer');

    headerLogoName.textContent = "Odin Todo List";
}