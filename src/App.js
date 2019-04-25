import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],

      todo: ''
    }; 
  }

  
  handleChanges = event => {
    this.setState({
      todo : event.target.value
    })
    //console.log(this.state.todo);
  }

  handleAddTodo = event => {
    console.log("HANDLE ADD TODO HAS BEEN CALLED");
    event.preventDefault();
    let newTodo = {task:this.state.todo, id: Date.now(), completed: false};
    console.log(newTodo);
    this.setState( {
      todos: [...this.state.todos, newTodo],
      todo : ''
    });
  };

  handleStrikeTodo = event => {
    let todos = this.state.todos.slice();
    todos = todos.map( todo => {
      if (todo.task === event.target.textContent) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todos: todos});
  }

  handleClearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({todos: todos});
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>

        <TodoList 
        todos = {this.state.todos} 
        handleStrikeTodo = {this.handleStrikeTodo}  />

        <TodoForm todo={this.state.todo} 
        handleChanges={this.handleChanges} 
        handleAddTodo = {this.handleAddTodo}
        handleClearCompleted = {this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
