import { useEffect, useMemo, useReducer, useState } from "react";
import type { FilterValue, ListOfTodos, TitleTodo, Todo, TodoId } from "../types";
import { todoReducer } from "../reducers/todoReducer";
import { TODO_ACTIONS, TODO_FILTERS } from "../consts";


interface Props {
    filteredTodos: ListOfTodos;
    handleNewTodo: (title: TitleTodo) => void;
    handleRemoveTodo: (id: TodoId) => void;
    handleCompleted: (id: TodoId) => void;
    handleClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
    filterSelected: FilterValue;
    activeCount: number;
    completedCount: number;
    selectedTodo: Todo | null;
    handleSelectTodo: (todo: Todo | null) => void;

}

const init = (): ListOfTodos =>{
   return JSON.parse(localStorage.getItem('todos') || '[]');
}      
export const useTodo = (): Props => {
    const [todos, dispatch] = useReducer(todoReducer, [] as ListOfTodos, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const filteredTodos = useMemo(() => {
        switch (filterSelected) {
            case TODO_FILTERS.ACTIVE:
                return todos.filter(todo => !todo.completed);
            case TODO_FILTERS.COMPLETED:
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    },[todos, filterSelected]);

    const handleFilterChange =(filter: FilterValue): void => {
    setFilterSelected(filter)
  }

    const handleClearCompleted = (): void => {
        const action = {
            type: TODO_ACTIONS.CLEAR_COMPLETED,
        }
        dispatch(action);
    }

    const handleNewTodo = (title: TitleTodo): void => {
        const action = {
            type: TODO_ACTIONS.ADD_TODO,
            payload: {
                id: Date.now(), // Simple ID generation
                title: title.title,
                completed: false
            }
      }
        dispatch(action);
    }

     const handleRemoveTodo = ({ id }: TodoId): void => {
        const action = {
            type: TODO_ACTIONS.REMOVE_TODO,
            payload: { id }
      }
        dispatch(action);
    }
    const handleCompleted = ({id}: TodoId): void => {
        const action = {
            type: TODO_ACTIONS.TOGGLE_TODO,
            payload: { id }
      }
        dispatch(action);
    }

    const handleSelectTodo = (todo: Todo | null ): void => {
        setSelectedTodo(todo);
    }

 

    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount

    return {
        filteredTodos,
        handleNewTodo,
        handleRemoveTodo,
        handleCompleted,
        handleClearCompleted,
        handleFilterChange,
        filterSelected,
        activeCount,
        completedCount,
        selectedTodo,
        handleSelectTodo
    };

}