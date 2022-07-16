import './style.css';
import Todo from './todo.js';

function generatePage(projectPage = 'inbox') {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLogo = document.createElement('div');
    const logo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const headerLogoName = document.createElement('div');
    const profileContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const addTodoGeneral = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const sidebar = document.createElement('div');
    const sidebarMenuMain = document.createElement('div');
    const sidebarMenuProjects = document.createElement('div');
    const sidebarMenu = document.createElement('div');
    const inboxLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const todayLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const sidebarTitle = document.createElement('h3');
    const projectLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addProject = document.createElement('div');
    const addProjectLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addProjectName = document.createElement('div');

    const mainContent = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const todoContainer = document.createElement('div');
    const singleTodo = document.createElement('div');
    const addTodo = document.createElement('div');
    const addTodoLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const addTodoName = document.createElement('div');

    container.classList.add('container');
    header.classList.add('header');
    headerLogo.classList.add('header-logo');
    logo.classList.add('logo');
    headerLogoName.classList.add('header-logo-name');
    profileContainer.classList.add('profile-container');
    profilePic.classList.add('profile-pic');
    addTodoGeneral.classList.add('add-todo-general');

    sidebar.classList.add('sidebar');
    sidebarMenuMain.classList.add('sidebar-menu-main');
    sidebarMenuProjects.classList.add('sidebar-menu-projects');
    sidebarMenu.classList.add('sidebar-menu');
    inboxLogo.classList.add('inbox-logo');
    todayLogo.classList.add('today-logo');
    sidebarTitle.classList.add('sidebar-title');
    projectLogo.classList.add('project-logo');
    addProject.classList.add('add-project');
    addProjectLogo.classList.add('add-project-Logo');
    addProjectName.classList.add('add-project-Name');

    mainContent.classList.add('main-content');
    mainTitle.classList.add('main-title');
    todoContainer.classList.add('todo-container');
    singleTodo.classList.add('todo');
    addTodo.classList.add('add-todo');
    addTodoLogo.classList.add('add-todo-logo');
    addTodoName.classList.add('add-todo-name');


}