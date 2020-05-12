import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKS,
  CLEAR_TASKS,
  CLEAR_FILTER,
  TASK_ERROR,
} from "../types";
const uuid = require("uuid");

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        title: "Play some games",
        description: "Play R6",
        type: "important",
      },
      {
        id: 2,
        title: "Bring milk",
        type: "important",
      },
      {
        id: 3,
        title: "Make a cup of tea",
        description: "Make cold tea",
        type: "not important",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Add Task
  const addTask = (task) => {
    task.id = uuid.v4();
    dispatch({ type: ADD_TASK, payload: task });
  };

  // Delete Task
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  // Set Current Task
  const setCurrent = (task) => {
    dispatch({ type: SET_CURRENT, payload: task });
  };

  // Clear Current Task
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Task
  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  // Filter Task
  const filterTasks = (title) => {
    dispatch({ type: FILTER_TASKS, payload: title });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        filtered: state.filtered,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
        filterTasks,
        clearFilter,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskState;
