import React, { Component } from 'react';

class TodoForm extends Component{

constructor(){
  super();

  this.state = {
     title: 'hola',
     resonsible: '',
     description: '',
      priority: 'low'
  };

  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInput(e){
    const { value , name } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

render(){

  return(
    <div className="card">
      <form className="card-body" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.handleInput}
            placeholder="Title" />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="responsible"
            className="form-control"
            onChange={this.handleInput}
            placeholder="Responsable"  />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleInput}
            placeholder="description" />
        </div>
        <div className="form-group">
          <select
            name="priority"
            className="form-control"
              onChange={this.handleInput}
           >
           <option> Low </option>
           <option> Medium </option>
           <option> Hight </option>
           </select>
        </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )

}


}


export default TodoForm ;
