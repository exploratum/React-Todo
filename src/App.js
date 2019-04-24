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

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>

        <TodoList todos = {this.state.todos} />

        <TodoForm todo={this.state.todo} 
        handleChanges={this.handleChanges} 
        handleAddTodo = {this.handleAddTodo} 
        />
      </div>
    );
  }
}

export default App;
