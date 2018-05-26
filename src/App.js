import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation.js'
import Task from './components/Task.js'
import { todos } from './todos.json';


class App extends Component {

constructor(){
  super();
  this.state = {
    todos:todos
  }
}

  render() {

  const todos = this.state.todos.map((todo ,i ) =>{
        return  <Task todo={todo} i={i} />
  })

    return (
      <div className="App">
      <Navigation ntodos={this.state.todos.length}  name="Tareas" />
        <div className="container">
          <div className = "row">
         {todos}
         </div>

        </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
