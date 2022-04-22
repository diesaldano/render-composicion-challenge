import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodo, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Has completado { completedTodo } de { totalTodos } TODOs
    </h2>
  );
}

export { TodoCounter };
