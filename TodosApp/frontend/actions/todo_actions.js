export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

// export const ADD_TO_CART = "ADD_TO_CART";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

// export const addEggs = {
//     type: ADD_EGGS,
//     name: "eggs",
//     price: 9,
//     key: Math.floor(Math.random() * 10000) // used to simulate "id" from database
// }


export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
}

// export const addToCart = (id) => {
//     return {
//         type: ADD_TO_CART,
//         id // same as id: id
//     }
// }