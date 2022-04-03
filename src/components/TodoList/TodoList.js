import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section>
      { props.error && props.onError() }
      { props.loading && props.onLoading() }
      { props.searchedTodos.length === 0 && props.onEmpty() }
      <ul>
        {props.searchedTodos.map(props.render)}
      </ul>
    </section>
  );
}

export { TodoList };
