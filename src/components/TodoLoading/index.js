import React from 'react';
import './TodoLoading.css';

function TodoLoading(){
    return (
        <div className="LoadingTodo-container">
            <span className='LoadingTodo-completeIcon'></span>
            <div className='LoadingTodo-item'>Please wait...</div>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    )
}

export { TodoLoading };