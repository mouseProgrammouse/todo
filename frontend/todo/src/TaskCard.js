import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import './TaskCard.css'


class TaskCard extends Component {

  constructor (props) {
    super(props);
    this.state = {
      updateMode: false
    }
  }

  updateModeOn (e) {
    e.preventDefault();
    this.setState({updateMode: true})
  }

  updateModeOff (e) {
    e.preventDefault();
    this.setState({updateMode: false})
  }

  updateTaskById (e, id) {
    this.updateModeOff(e);
    //if id === new add new task
    //otherwise update existed task
    if (id==='new') {
      this.props.addTask(e.target.title.value, e.target.description.value);
      this.props.newTaskModeOff(e);
    }
    else {
      this.props.updateTask(id, e.target.title.value, e.target.description.value);
    }
  }

  cancel (e, id) {
    this.updateModeOff(e);
    if (id==='new') {
      this.props.newTaskModeOff(e);
    }
  }


  render () {
    const { title, description, id, deleteTask } = this.props;

    return (
      <div className="card">
      {(this.state.updateMode === true || id === 'new')?
        <form className="update" onSubmit={e => this.updateTaskById(e, id)}>
          <input type="text" name="title" defaultValue={title} minLength="1" maxLength="36"/>
          <textarea rows="8" cols="25" name="description" minLength="1" maxLength="124" defaultValue={description}>
          </textarea>
          <button type="submit">DONE</button>
          <button type="cancel" onClick={e => this.cancel(e, id)}><FontAwesomeIcon icon={faTimes}/></button>
        </form>:
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="buttons">
            <div className="actions">
              <button className="edit" onClick={e => this.updateModeOn(e)}><FontAwesomeIcon icon={faEdit}/></button>
              <button className="delete" onClick={()=>deleteTask(id)}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
            <button className="done"><FontAwesomeIcon icon={faCheck}/></button>
          </div>
        </div>
      }
      </div>);
  }
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  newTaskModeOff:  PropTypes.func
}

export default TaskCard;
