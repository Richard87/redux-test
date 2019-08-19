import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions";

let initialTodos = [
    {
        text: 'Consider using Redux',
        completed: true
    },
    {
        text: 'Keep all state in a single tree',
        completed: false
    }
];
const TodosReducer = (todos = initialTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case REMOVE_TODO:
            return todos.filter((todo, index) => index !== action.index)
        case TOGGLE_TODO:
            return todos.map((todo,index) => {
                if (index === action.index)
                    return {...todo, completed: !todo.completed}
                return todo
            })
        default:
            return todos
    }
}
export default TodosReducer