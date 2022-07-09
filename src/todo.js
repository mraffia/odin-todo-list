const Todo = (id, title, description = null, dueDate = null, priority = 4) => {
    const todoId = id;
    let todoTitle = title;
    let todoDesc = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let completeStatus = false;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDescription  = () => todoDesc;
    const getDueDate = () => todoDueDate;
    const getPriority = () => todoPriority;
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

    const toogleStatus = () => {
        if (completeStatus === false) {
            completeStatus = true;
        } else {
            completeStatus = false;
        }
    } 

    return { 
        getId,
        getTitle, 
        getDescription, 
        getDueDate, 
        getPriority,
        getStatus,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        toogleStatus,
    }
}

export default Todo;