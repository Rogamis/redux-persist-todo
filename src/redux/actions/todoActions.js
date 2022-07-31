export const ADD_TASK = 'TASKS::ADD_TASK';
export const ADD_TASKS = 'TASKS::ADD_TASKS';
export const REMOVE_TASK = 'TASKS::REMOVE_TASK';

export const fetchTasks = () => async (dispatch, getState) => {
    try {
        const tasks = getState().todo.tasks;
        if(tasks.length !== 0){
            return;
        }
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
        const data = await res.json();
        dispatch(addTasks(data))
    } catch(e){
        console.log('fetchTasks', e)
    }
}

export const formTask = (taskTitle, callback) => async (dispatch, getState) => {
    try {
        const task = {
            id: new Date(),
            title: taskTitle
        }
        dispatch(addTask(task));
        if(!!callback){
            callback()
        }
    } catch(e){
        console.log('formTask', e)
    }
}

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const addTasks = (tasks) => {
    return {
        type: ADD_TASKS,
        payload: tasks
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}
