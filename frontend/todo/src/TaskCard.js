import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TaskCard extends Component {

  constructor (props) {
    super(props);
  }

render() {
  const { title, description } = this.props;
  return (
    <div className="card">
      <button className="close">X</button>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="actions">
        <button className="edit">edit</button>
        <button className="delete">delete</button>
        <button className="done">done</button>
      </div>
    </div>);
  }
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TaskCard;
