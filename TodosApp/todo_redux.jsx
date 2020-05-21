import React from 'react';
import ReactDOM from 'react-dom';
import store from './frontend/store/store';
import { receiveTodos, receiveTodo} from './frontend/actions/todo_actions';



const Todos = <h1>Todos </h1>

document.addEventListener("DOMContentLoaded", function(){
    const root = document.getElementById('root');
// debugger;
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;

    ReactDOM.render(Todos, root);
})


// Title       inventory  Apple --> 5
// Body

// Tags    Cart
// Add Tag   add to cart

// Create Todos


// Cart
// inventory
// clear
// add to cart
