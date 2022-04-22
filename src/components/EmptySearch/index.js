import React from 'react';

function EmptySearch(props) {
  return (
    <div>
      <h1>No Results for {props.searchText} </h1>
    </div>
  )
}

export { EmptySearch };