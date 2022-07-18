const Todo = (id, title, description = null, dueDate = null, priority = 4, project = 'Inbox') => {
    const todoId = id;
    let todoTitle = title;
    let todoDesc = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let todoProject = project;
    let completeStatus = false;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDescription  = () => todoDesc;
    const getDueDate = () => todoDueDate;
    const getPriority = () => todoPriority;
    const getProject = () => todoProject;
    const getStatus = () => completeStatus;

    const setTitle = newTitle => {
        todoTitle = newTitle;
    }

    const setDesc = newDesc => {
        todoDesc = newDesc;
    }

    const setDueDate = newDueDate => {
        todoDueDate = newDueDate;
    }

    const setPriority = newPriority => {
        todoPriority = newPriority;
    }

    const setProject = newProject => {
        todoProject = newProject;
    }

    const setComplete = () => {
        completeStatus = true;
    } 

    const setUncomplete = () => {
        completeStatus = false;
    } 

    return { 
        getId,
        getTitle, 
        getDescription, 
        getDueDate, 
        getPriority,
        getProject,
        getStatus,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        setProject,
        setComplete,
        setUncomplete
    }
}

export default Todo;