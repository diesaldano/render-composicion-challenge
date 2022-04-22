import React from 'react';
import './TodoHeader.css'

function TodoHeader({children, loading}) {
    return (
        <header>
            {React.Children.toArray(children).map((child, index) => {
                return React.cloneElement(child, {
                    key: index,
                    loading
                })
            })}
        </header>
    )
}

export { TodoHeader };