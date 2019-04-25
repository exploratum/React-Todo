import React from 'react'
import { getPortPromise } from 'portfinder';

const TodoForm = (props) => {
    return (
        <form className='todo-form'>
            <input 
            onChange = {props.handleChanges}
            type="text" 
            placeholder='to do'             
            value = {props.todo}
            />
            <button onClick = {props.handleAddTodo}> Add to do</button>
            <button onClick = {props.handleClearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
