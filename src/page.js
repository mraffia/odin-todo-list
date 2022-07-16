import './style.css';
import PlusSvg from './images/add.svg';
import PlusMiniSvg from './images/add_mini.svg';
import DoneAllSvg from './images/done_all.svg';
import ProfileSvg from './images/account_circle.svg';
import InboxSvg from './images/inbox.svg';
import ListAltSvg from './images/list_alt.svg';
import TodaySvg from './images/today.svg';
import CheckBoxSvg from './images/check_box.svg';
import Todo from './todo.js';

function generatePage(pageTitle = 'Inbox') {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLogoContainer = document.createElement('div');
    const headerLogo = document.createElement('img');
    const headerLogoName = document.createElement('div');
    const profileContainer = document.createElement('div');
    const addTodoGeneral = document.createElement('img');
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
    const projectLogo = document.createElement('img');
    const projectName = document.createElement('div');
    const addProjectContainer = document.createElement('div');
    const addProjectLogo = document.createElement('img');
    const addProjectName = document.createElement('div');

    const mainContent = document.createElement('div');
    const mainTitle = document.createElement('h1');
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
    addTodoGeneral.classList.add('add-todo-general');

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
    projectLogo.classList.add('project-logo');
    projectName.classList.add('project-name');
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
    addTodoGeneral.src = PlusSvg;

    inboxLogo.src = InboxSvg;
    todayLogo.src = TodaySvg;
    sidebarTitle.textContent = "Projects";
    projectLogo.src = ListAltSvg;
    addProjectLogo.src = PlusMiniSvg;
    addProjectName.textContent = "Add Project";

    mainTitle.textContent = pageTitle;
    addTodoLogo.src = PlusMiniSvg;
    addTodoName.textContent = "Add Task";

    headerLogoContainer.appendChild(headerLogo);
    headerLogoContainer.appendChild(headerLogoName);
    profileContainer.appendChild(addTodoGeneral);
    profileContainer.appendChild(profilePic);
    header.appendChild(headerLogoContainer);
    header.appendChild(profileContainer);

    inboxContainer.appendChild(inboxLogo);
    inboxContainer.appendChild(inboxName);
    todayContainer.appendChild(todayLogo);
    todayContainer.appendChild(todayName);
    projectContainer.appendChild(projectLogo);
    projectContainer.appendChild(projectName);
    addProjectContainer.appendChild(addProjectLogo);
    addProjectContainer.appendChild(addProjectName);
    sidebarMenuMain.appendChild(inboxContainer);
    sidebarMenuMain.appendChild(todayContainer);
    sidebarMenuProjects.appendChild(sidebarTitle);
    sidebarMenuProjects.appendChild(projectContainer);
    sidebarMenuProjects.appendChild(addProjectContainer);
    sidebar.appendChild(sidebarMenuMain);
    sidebar.appendChild(sidebarMenuProjects);
}