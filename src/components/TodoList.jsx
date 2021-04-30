import React, { Component } from "react";
class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header text-center">
          <h3>Todo List </h3>
          <button className="btn btn-primary mt-3">Create Task</button>
        </div>
        <div className="task-container"></div>
      </div>
    );
  }
}

export default TodoList;
