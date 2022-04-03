import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm/';
import { CreateTodoButton } from '../CreateTodoButton/';
import { Modal } from '../Modal/';
import { useTodos } from '../hooks/useTodos';
import { TodoLoading } from '../TodoLoading/';

  function App() {    
    const {
      loading,
      error,
      searchValue, 
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos, 
      completedTodo,
      addTodo
    } = useTodos()
    
    return (
      <React.Fragment>
      <TodoCounter 
        totalTodos={totalTodos}  
        completedTodo={completedTodo}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
           />
      <TodoList>
        {error && <h1>404 hubo un error</h1>}
        {loading && new Array(4).fill(0).map((_, index) => (
          <TodoLoading/>
        ))}

        {(!loading && !searchedTodos.length) && <h1>Crea tu primer to do</h1>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {
        !!openModal && (
          <Modal>
            <TodoForm 
              addTodo={addTodo} 
              setOpenModal={setOpenModal}
            />
          </Modal>
        )
      }
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
    )
  }

export default App;