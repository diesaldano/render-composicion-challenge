import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc  = props.render || props.children;
  return (
    <section>
      { props.error && props.onError() }
      { props.loading && props.onLoading() }
      { (!props.loading && 
        !props.totalTodos) && 
        props.onEmpty() 
      }
      {(!!props.totalTodos && 
        props.searchedTodos.length === 0) &&
        props.onEmptySearch(props.searchText)
        }
        {(!props.loading && !props.error && 
          props.searchedTodos.map(renderFunc))
        }
      {/* <ul>
        {props.searchedTodos.map(renderFunc)}
      </ul> */}
    </section>
  );
}

export { TodoList };
