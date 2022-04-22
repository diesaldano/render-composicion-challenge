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
import { EmptySearch } from '../EmptySearch';
import { TodoHeader } from '../TodoHeader';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/';

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
      completedTodos,
      addTodo,
      sincronizeTodos
    } = useTodos()
    
    return (
      <React.Fragment>
        <TodoHeader loading={loading}>
          <TodoCounter 
            completedTodo={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

        </TodoHeader>
        <TodoList 
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError={()=> <Error />}
          onLoading={()=> <TodoLoading />}
          onEmpty={()=> <EmpyTodos />}
          onEmptySearch={(searchText) => 
            <EmptySearch searchText={searchText} />
          }
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
        <ChangeAlertWithStorageListener 
          sincronizeTodos={sincronizeTodos}
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