// presentational 
import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
// import todosReducer from '../../reducers/todo_reducer';

// const Todo = () => {
    
// }

class TodoList extends React.Component{

    constructor(props){ // props.receiveTodo - func , props.todos - obj
        //debugger;
        super(props);
    }

    render(){ // what is prop here?
        //debugger;
        let { todo } = this.props;
        const todoLis = this.props.todos.map(todo => {
            //debugger;

            return (
                <ul>
                    <li key={todo.id}>
                        hello
                        {todo.title}
                    </li>
                </ul>
            )
        });
        return (
            <ul>
                {todoLis}
                <TodoListItem/>
                {/* <TodoListItem todo={todo}/> */}
            </ul>
        )

    };
}

export default TodoList;

