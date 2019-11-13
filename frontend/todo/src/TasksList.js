import React from 'react'
import PropTypes from 'prop-types'
import TaskCard from './TaskCard'
import './TasksList.css'

const TasksList = (props) => {

  const { updateTask, addTask, deleteTask, tasksList } = props;

  return (<div className="list">
    {tasksList.map((task, index) => (
      <TaskCard updateTask={updateTask} deleteTask={deleteTask} key={index} title={task.project} description={task.description} id={task.id}/>
    ))}
  </div>);
}

TasksList.propTypes = {
  updateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasksList: PropTypes.array.isRequired
}

export default TasksList
