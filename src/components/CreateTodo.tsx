import { useState } from "react"
import type { TitleTodo } from "../types";

interface Props {
  saveTodo: (title: TitleTodo) => void;
}


export const CreateTodo: React.FC<Props> = ( { saveTodo } ) => {
    const [inputValue, setInputValue] = useState('')
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            saveTodo({ title: inputValue.trim() });
            setInputValue(''); // Clear the input after saving
        }
    }
  return (
   <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
      onKeyDown={ handleKeyDown }
      autoFocus
      type="text"
      />
  )
}
