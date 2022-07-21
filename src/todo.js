const Todo = (id, title, duedate, project, completeStatus) => {
    const todoId = id;
    let todoTitle = title;
    let todoDuedate = duedate;
    let todoProject = project;
    let todoCompleteStatus = completeStatus;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDuedate = () => todoDuedate;
    const getProject = () => todoProject;
    const getStatus = () => todoCompleteStatus;

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
        todoCompleteStatus = true;
    } 

    const description = () => `Id: ${todoId} Title: ${todoTitle}, Due date: ${todoDuedate}, Project: ${todoProject}, Complete status: ${todoCompleteStatus}`;
    
    const toJSON = () => {
        return { todoId, todoTitle, todoDuedate, todoProject, todoCompleteStatus }
    }
    
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
        description,
        toJSON
    }
}

export default Todo;