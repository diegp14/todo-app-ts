import { useEffect, useState } from "react"
import type { TitleTodo, Todo } from "../types";


interface Props {
  saveTodo: (title: TitleTodo) => void;
  selectedTodo: Todo | null;
  onSelectTodo: (todo: Todo | null) => void;
  
}


export const CreateTodo: React.FC<Props> = ( { saveTodo, selectedTodo, onSelectTodo} ) => {
   
    const [inputValue, setInputValue] = useState( '');

  useEffect(() => {
  if (selectedTodo) {
    setInputValue(selectedTodo.title);
  }
}, [selectedTodo]);


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            saveTodo({ title: inputValue.trim() });
            setInputValue(''); // Clear the input after saving
        }
    }

    const clearInput = (): void => {
        setInputValue('');
        onSelectTodo(null); // Reset selected todo
        
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
        if (selectedTodo) {   
            onSelectTodo(null); // Deselect the todo if input changes
        }
    }

  return (
   <div className={`input-container ${inputValue ? 'has-text' : ''}`}>
   <input
      className="input-text"
      placeholder="What needs to be done?"
      onChange={(event) => handleInputChange(event)}
      value={inputValue}
      onKeyDown={ handleKeyDown }
      autoFocus
      type="text"
      />
    <button className="destroyInput" onClick={clearInput}/>
      </div>
  )
}
