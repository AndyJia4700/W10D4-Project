// import React from 'react';
// import ReactDOM from 'react-dom';

export const allTodos = (state) => {
    // debugger
    // return Object.values(state.todos)
    return Object.keys(state.todos).map((id) => {
        return state.todos[id];
    }) //why not Obj.values - ask TA?
} // ask if it is the right output and why we are doing it?