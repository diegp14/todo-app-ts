import type { TodoId, Todo as TodoType } from "../types"

interface Props extends TodoType {
    
    onRemoveTodo: ({ id }: TodoId) => void
    onCompleted:({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onSelectTodo: (todo: TodoType) => void;
    
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleted, onSelectTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onCompleted({ id, completed: event.target.checked });
    }
  return (
   <div className="view"
   
   >
    <input 
        className="toggle" 
        type="checkbox" 
        checked={completed} 
        onChange={ handleChangeCheckbox } />
    <label
         style={{cursor: completed ? 'default' : 'pointer'}}
            onClick={() => !completed && onSelectTodo({ id, title, completed })}
      
    >{title}</label>

    <button className="destroy" onClick={() => {onRemoveTodo({id})}}></button>
   </div>
  )
}
