import type { ListOfTodos, TodoAction } from "../types";
import { TODO_ACTIONS } from "../consts";

export const todoReducer = (state: ListOfTodos, action: TodoAction): ListOfTodos => {


    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return [...state, action.payload]; // Ensure payload is a Todo
        case TODO_ACTIONS.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case TODO_ACTIONS.TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            case TODO_ACTIONS.CLEAR_COMPLETED:
                return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}