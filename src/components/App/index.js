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
import { Error } from '../Error';
import { EmpyTodos } from '../EmpyTodos';

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
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={()=> <Error />}
        onLoading={()=> <TodoLoading />}
        onEmpty={()=> <EmpyTodos />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
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