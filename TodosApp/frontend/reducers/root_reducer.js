import todosReducer from './todo_reducer';
import { combineReducers } from 'redux';

const rootReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos, action)
    }
}


export default combineReducers({
    todos: todosReducer
})

