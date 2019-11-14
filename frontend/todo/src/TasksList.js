import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TaskCard from './TaskCard'
import './TasksList.css'

class TasksList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskMode: false
    }
  }

  newTaskModeOn (e) {
    e.preventDefault();
    this.setState({newTaskMode: true});
  }

  newTaskModeOff (e) {
    e.preventDefault();
    this.setState({newTaskMode: false});
  }

render () {

  const { updateTask, addTask, deleteTask, tasksList } = this.props;

  return (<div className="list">
    {tasksList.map((task, index) => (
      <TaskCard addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} key={index} title={task.project} description={task.description} id={task.id} />
    ))}
    {(this.state.newTaskMode)?
      <TaskCard addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} title={''} description={''} id={'new'} newTaskModeOff={this.newTaskModeOff.bind(this)}/>:''
    }
    <div className="add-new-task">
      <button onClick={e=>this.newTaskModeOn(e)}>Create task</button>
    </div>
  </div>);
  }
}

TasksList.propTypes = {
  updateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasksList: PropTypes.array.isRequired
}

export default TasksList
