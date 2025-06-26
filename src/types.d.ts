import type { TODO_ACTIONS } from "./consts";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

export interface TitleTodo {
  title: string;
};

export type TodoId = Pick<Todo, 'id'>;
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;

export type ListOfTodos = Todo[];

export type  FilterValue =  typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
export type ActionValue = typeof TODO_ACTIONS[keyof typeof TODO_ACTIONS];

export type TodoAction =  { type: typeof TODO_ACTIONS.ADD_TODO  ; payload: Todo } 
  | { type: typeof TODO_ACTIONS.REMOVE_TODO; payload: TodoId}
  | { type: typeof TODO_ACTIONS.TOGGLE_TODO; payload: TodoId} 
  | { type: typeof TODO_ACTIONS.CLEAR_COMPLETED };