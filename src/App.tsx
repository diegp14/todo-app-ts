import { Todos } from "./components/Todos"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useTodo } from "./hooks/useTodo"


// const mockTodos = [
//   { id: 1, title: 'Learn React', completed: true },
//   { id: 2, title: 'Learn TypeScript', completed: false },
//   { id: 3, title: 'Build a Todo App', completed: false },
// ]

const App: React.FC = () => {

   const {handleNewTodo, 
          handleRemoveTodo, 
          handleClearCompleted, 
          handleCompleted, 
          filteredTodos, 
          handleFilterChange,
          filterSelected,
          activeCount,
          completedCount,
          selectedTodo,
          handleSelectTodo } = useTodo();

      

  return (
    <div className="todoapp">

    <Header 
      saveTodo={ handleNewTodo }
      selectedTodo={selectedTodo}
      onSelectTodo={handleSelectTodo}
      
      />
    <Todos
    onCompleted={handleCompleted}
    onRemoveTodo={handleRemoveTodo} 
    todos={filteredTodos}
    onSelectTodo={handleSelectTodo}
    
  
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
