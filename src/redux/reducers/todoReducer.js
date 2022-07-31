import { ADD_TASK, ADD_TASKS, REMOVE_TASK } from "../actions/todoActions";

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case ADD_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    if(task.id != action.payload){
                        return true;
                    }else{
                        return false;
                    }
                })
            }
        default:
            return state;
    }
};

export default reducer;



