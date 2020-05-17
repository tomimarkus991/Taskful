import React, { Fragment, useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../context/task/TaskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";

const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks, filtered, getTasks, loading } = taskContext;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  if (tasks !== null && tasks.length === 0 && !loading) {
    return <h4>Congratulations. Now go and take a break!</h4>;
  }

  return (
    <Fragment>
      {tasks !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((task) => (
                <CSSTransition key={task._id} timeout={500} classNames="item">
                  <TaskItem task={task} />
                </CSSTransition>
              ))
            : tasks.map((task) => (
                <CSSTransition key={task._id} timeout={500} classNames="item">
                  <TaskItem task={task} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Tasks;
