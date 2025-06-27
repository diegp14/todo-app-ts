import type { ListOfTodos, TodoId, Todo as TodoType } from "../types";
import { Todo } from "./Todo";


interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({id}: TodoId) => void
    onCompleted:({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onSelectTodo: (todo: TodoType) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted, onSelectTodo }) => {
    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''} >
                        <Todo key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onCompleted={onCompleted}
                        onSelectTodo={onSelectTodo}
                       
                       
                        /> 
                    </li>
                ))
            }
        </ul>
    )
}
