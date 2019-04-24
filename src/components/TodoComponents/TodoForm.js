import React from 'react'
import { getPortPromise } from 'portfinder';

const TodoForm = (props) => {
    console.log(props.handdleAddTodo);
    return (
        <form>
            <input 
            onChange = {props.handleChanges}
            type="text" 
            placeholder='to do'             
            value = {props.todo}
            />

            <button onClick = {props.handleAddTodo}> Add to do</button>

            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
