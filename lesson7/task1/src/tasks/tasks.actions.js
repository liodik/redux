import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const TasksListReceived = tasksList => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksList = () => {
  const thukAction = function (dispatch) {
    tasksGateway.fetchTasksList().then(tasksList => dispatch(TasksListReceived(tasksList)));
  };
  return thukAction;
};

export const updateTask = taskId => {
  const thukAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const { text, done } = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      text,
      done: !done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
  return thukAction;
};

export const deleteTask = taskId => {
  const thukAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
  return thukAction;
};

export const createTask = text => {
  const thukAction = function (dispatch) {
    const newTask = {
      text,
      done: false,
    };
    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
  };
  return thukAction;
};
