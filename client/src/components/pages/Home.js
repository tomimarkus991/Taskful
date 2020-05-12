import React from "react";
import Tasks from "../tasks/Tasks";
import TaskForm from "../tasks/TaskForm";
import TaskFilter from "../tasks/TaskFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <TaskForm></TaskForm>
      <div>
        <TaskFilter></TaskFilter>
        <Tasks></Tasks>
      </div>
    </div>
  );
};

export default Home;
