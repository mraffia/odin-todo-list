const Todo = (id, title, duedate = null, project = 'Inbox') => {
    const todoId = id;
    let todoTitle = title;
    let todoDuedate = duedate;
    let todoProject = project;
    let completeStatus = false;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDuedate = () => todoDuedate;
    const getProject = () => todoProject;
    const getStatus = () => completeStatus;

    const setTitle = newTitle => {
        todoTitle = newTitle;
    }

    const setDuedate = newDuedate => {
        todoDuedate = newDuedate;
    }

    const setProject = newProject => {
        todoProject = newProject;
    }

    const setComplete = () => {
        completeStatus = true;
    } 

    const description = () => `Id: ${todoId} Title: ${todoTitle}, Due date: ${todoDuedate}, Project: ${todoProject}, Complete status: ${completeStatus}`;

    return { 
        getId,
        getTitle, 
        getDuedate,
        getProject,
        getStatus,
        setTitle,
        setDuedate,
        setProject,
        setComplete,
        description
    }
}

export default Todo;