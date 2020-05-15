import React, { useState, useContext, useEffect } from "react";
import TaskContext from "../../context/task/TaskContext";

const TaskForm = () => {
  const taskContext = useContext(TaskContext);
  const { addTask, updateTask, clearCurrent, current } = taskContext;

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({
        title: "",
        description: "",
        type: "not important",
      });
    }
  }, [taskContext, current]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    type: "not important",
  });
  const { title, description, type } = task;

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTask(task);
    } else {
      updateTask(task);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={onChange}
      ></input>
      <h5>Task Type</h5>
      <input
        type="radio"
        name="type"
        value="not important"
        checked={type === "not important"}
        onChange={onChange}
      />{" "}
      Not important&nbsp;
      <input
        type="radio"
        name="type"
        value="important"
        checked={type === "important"}
        onChange={onChange}
      />{" "}
      Important
      <div>
        <input
          type="submit"
          value={current ? "Update Task" : "Add Task"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
