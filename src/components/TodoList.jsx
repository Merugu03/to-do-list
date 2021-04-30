import React, { useState, Component } from "react";
import CreateTask from "../popups/createTask";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [TaskList, setTaskList] = useState([]);
  const toggle = () => {
    setModal(!modal);
  };
  const saveTask = (taskobj) => {
    let tempList = TaskList;
    TaskList.push(taskobj);
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <div>
      <div className="header text-center">
        <h3>Todo List </h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {TaskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </div>
  );
};

export default TodoList;
