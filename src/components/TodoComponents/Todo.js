import React from 'react';
import { getPortPromise } from 'portfinder';

const Todo = props => {
    console.log(props.todo.completed);

    // const strikedStyle = {
    //     textDecoration: 'line-through'
    // }

    // const noStrikeStyle = {
    //     textDecoration: 'none'
    // }

    return (
        <div 
        style = {props.todo.completed ? { textDecoration: 'line-through' } : null}
        onClick = {props.handleStrikeTodo}
        >
            {props.todo.task}
        </div>
    )
}

export default Todo;