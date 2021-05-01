import React, { useState, useEffect } from "react";
import CreateTask from "../popups/createTask";
import Card from "./Card";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [TaskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);
  const deleteTask = (index) => {
    let tempList = TaskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const saveTask = (taskobj) => {
    let tempList = TaskList;
    TaskList.push(taskobj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
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
        {TaskList.map((obj, index) => (
          <Card taskObj={obj} index={index} deleteTask={deleteTask} />
        ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </div>
  );
};

export default TodoList;
