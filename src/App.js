import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation.js'
import Task from './components/Task.js'
import TodoForm from './components/TodoForm.js'
import { todos } from './todos.json';


class App extends Component {

constructor(){
  super();
  this.state = {
    todos: []
  }

  this.handleAddTodo = this.handleAddTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
}

componentDidMount(){
  this.setState({todos:todos});
}


handleAddTodo(todo){
  this.setState({
    todos:[...this.state.todos, todo]
  });

}

removeTodo(index){
  this.setState({
    todos:this.state.todos.filter((e,i)=>{
      return i !== index;
    })
  })
}

  render() {

  const todos = this.state.todos.map((todo ,i ) =>{
        return (
          <div className ="col-md-4" key={i}>
                 <Task todo={todo} index={i} removeTodo={this.removeTodo} />
          </div>
        )
  })

    return (
      <div className="App">
      <Navigation ntodos={this.state.todos.length}  name="Tareas" />
        <div className="container">
          <div className = "row">
         {todos}
         </div>
         <div className="container mt-5">
                  <TodoForm onAddTodo = {this.handleAddTodo} />
         </div>

        </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
