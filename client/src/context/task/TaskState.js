import React, { useReducer } from "react";
import axios from "axios";
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

const TaskState = (props) => {
  const initialState = {
    tasks: null,
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get("api/tasks");
      dispatch({ type: GET_TASKS, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.response.msg });
    }
  };

  // Add Task
  const addTask = async (task) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("api/tasks", task, config);
      dispatch({ type: ADD_TASK, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.response.msg });
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  // Clear Tasks
  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
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

  const { tasks, current, filtered, error } = state;
  return (
    <TaskContext.Provider
      value={{
        tasks,
        current,
        filtered,
        error,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
        filterTasks,
        clearFilter,
        getTasks,
        clearTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskState;
