import React, { useContext, useEffect } from "react";
import Tasks from "../tasks/Tasks";
import TaskForm from "../tasks/TaskForm";
import TaskFilter from "../tasks/TaskFilter";
import AuthContext from "../../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
