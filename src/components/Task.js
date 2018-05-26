import React, { Component } from 'react';

class Task extends Component{

  constructor(){
    super();
  }


  render(){

console.log(this.props);
    return(
      <div key={this.props.i} className="col-md-4">
        <div className="card mt-4">
         <div className ="card-header">
         <h3>{this.props.todo.title}</h3>
         <span className="badge badge-pill badge-danger ml-2">{this.props.todo.priority} </span>
         </div>
         <div className="card-body">
         <p>{this.props.todo.description}</p>
         <p> <mark>{this.props.todo.responsible}</mark> </p>
         </div>
        </div>
      </div>
    )

  }

}

export default Task;
