import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './frontend/store/store';
import { receiveTodos, receiveTodo} from './frontend/actions/todo_actions';
import App from './frontend/components/app'
import Root from './frontend/components/root'
import { allTodos } from './frontend/reducers/selectors';

// const Todos = <h1>Todos </h1>

document.addEventListener("DOMContentLoaded", function(){
    const root = document.getElementById('root');
    const store = ConfigureStore();
//debugger;
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;

    ReactDOM.render(<Root store={store}/>, root);
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
