import React from 'react';
import './Todo.css';

const Todo = props => {
    const strikedStyle = {
        textDecoration: 'line-through',
    }

    const noStrikeStyle = {
        textDecoration: 'none'
    }

    return (
        <div 
        className = 'todo'
        style = {props.todo.completed ? strikedStyle : noStrikeStyle}
        onClick = {props.handleStrikeTodo}
        >
            {props.todo.task}
        </div>
    )
}

export default Todo; 