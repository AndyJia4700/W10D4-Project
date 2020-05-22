import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    }
};
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// };

// const initialState = {
//  
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     
// };

const todosReducer = (state = initialState, action) => { // action - receiveTodo(s)
    Object.freeze(state);
    // //debugger;
    switch (action.type) { 
        case RECEIVE_TODOS:
            let otherState = {};
            action.todos.forEach(todo => {
                otherState[todo['id']] = todo;
            });
            return otherState;
        
            //  action.todos = todos;
            //  return todos;

        case RECEIVE_TODO:
            const {title, body, done, id} = action.todo;
            const newTodo = {
                [id]: { // action.todo
                    id: id,
                    title,
                    body,
                    done
                }
            };// action
            const newState = Object.assign({}, state, newTodo)
            return newState;
            
        default:
            return state;
    }
}

export default todosReducer;
