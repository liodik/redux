import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = ({ tasksList, getTasksList, createTask, updateTask, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  const sortedList = tasksList.slice().sort((a, b) => a.done - b.done);

  return (
    <div className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {sortedList.map(task => (
          <Task key={task.id} {...task} onChange={updateTask} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

TasksList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTasksList: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TasksList);
