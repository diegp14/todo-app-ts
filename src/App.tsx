import { useState } from "react"
import { Todos } from "./components/Todos"
import type { FilterValue, TitleTodo, TodoId } from "./types"
import type { Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Build a Todo App', completed: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed } : todo
    )
    setTodos(newTodos)
  }

  const handleFilterChange =(filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleNewTodo = (title: TitleTodo): void => {
    const newTodo: TodoType = {
      id: Date.now(), // Simple ID generation
      title: title.title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo =>{
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo    
  })

  return (
    <div className="todoapp">

    <Header saveTodo={ handleNewTodo }/>
    <Todos
    onCompleted={handleCompleted}
    onRemoveTodo={handleRemove} 
    todos={filteredTodos}
    />
    <Footer
    activeCount={activeCount}
    completedCount={completedCount}
    filterSelected={filterSelected}
    onClearCompleted={ handleClearCompleted }
    handleFilterChange={handleFilterChange}
    />

 
    </div>
  )
}

export default App
