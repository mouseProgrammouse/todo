import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'


class TaskCard extends Component {

  constructor (props) {
    super(props);
  }

render() {
  const { title, description } = this.props;
  return (
    <div className="card">
      <button className="close"><FontAwesomeIcon icon={faTimes}/></button>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="actions">
        <button className="edit"><FontAwesomeIcon icon={faEdit}/></button>
        <button className="delete"><FontAwesomeIcon icon={faTrash}/></button>
        <button className="done"><FontAwesomeIcon icon={faCheck}/></button>
      </div>
    </div>);
  }
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TaskCard;
