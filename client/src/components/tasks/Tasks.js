import React, { Fragment, useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../context/task/TaskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks, filtered } = taskContext;

  if (tasks.length === 0) {
    return <h4>Congratulations. Now go and take a break!</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((task) => (
              <CSSTransition key={task.id} timeout={400} classNames="item">
                <TaskItem task={task} />
              </CSSTransition>
            ))
          : tasks.map((task) => (
              <CSSTransition key={task.id} timeout={400} classNames="item">
                <TaskItem task={task} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Tasks;
