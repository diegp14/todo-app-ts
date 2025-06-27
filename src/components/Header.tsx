import type { TitleTodo, Todo } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    saveTodo: (title: TitleTodo) => void;
    selectedTodo: Todo | null;
    onSelectTodo: (todo: Todo| null ) => void;
    
}

export const Header: React.FC<Props> = ( { saveTodo, selectedTodo, onSelectTodo } ) => {
    return (
        <header className="header">
            <h1> Todo App
                <img
                    style={{ width: '60px', height: 'auto' }}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'/>
            </h1>
            <CreateTodo 
                saveTodo={ saveTodo } 
                selectedTodo={selectedTodo}
                onSelectTodo={onSelectTodo}
               
                />
        </header>
    )
}
