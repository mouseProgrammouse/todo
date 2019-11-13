import React from 'react'
import PropTypes from 'prop-types'

const TasksList = (props) => {

  const { updateTask, addTask, deleteTask, tasksList } = props;

  return (<div>
    Task List
  </div>);
}

TasksList.propTypes = {
  updateTask: PropTypes.object.isRequired,
  addTask: PropTypes.object.isRequired,
  deleteTask: PropTypes.object.isRequired,
  tasksList: PropTypes.array.isRequired
}

export default TasksList
