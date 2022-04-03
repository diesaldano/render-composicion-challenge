import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal,}){
    const [todoText, setTodoText] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(todoText);
    }

    const onCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    const onChangeTodoText = (e) => {
        setTodoText(e.target.value);
        console.log(todoText, e.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={todoText}
                onChange={onChangeTodoText}
                placeholder='Add a new todo'
            />
            <div className='TodoForm-buttonContainer TodoForm-button'>
                <button className='TodoForm-button-add'
                    type='submit'
                    onClick={ onSubmit }>Add</button>
                <button className='TodoForm-button-cancel'
                    type='button'
                    onClick={ onCancel }>Cancel</button>
            </div>
        </form>
    )
}

export { TodoForm };