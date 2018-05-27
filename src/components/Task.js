import React, { Component } from 'react';

class Task extends Component{

  removeTodo(index){
      if(window.confirm("Are you sure you want to Delete??"))
        this.props.removeTodo(index);
  }

  render(){
    return(
        <div className="card mt-4">
           <div className ="card-header">
             <h3>{this.props.todo.title}</h3>
             <span className="badge badge-pill badge-danger ml-2">{this.props.todo.priority} </span>
           </div>
           <div className="card-body">
             <p>{this.props.todo.description}</p>
             <p> <mark>{this.props.todo.responsible}</mark> </p>
           </div>
           <div className ="card-footer">
            <button
              className = "btn btn-danger"
              onClick={this.removeTodo.bind(this, this.props.index)}
              >
                Delete
              </button>
           </div>
        </div>
    )

  }

}

export default Task;
