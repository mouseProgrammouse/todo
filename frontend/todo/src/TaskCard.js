import React, {Component} from 'react'
import PropTypes from 'prop-types'


class TaskCard extends Component {

  constructor (props) {
    super(props);
  }

render() {
  const { title, description } = this.props;
  return (
    <div className="card">
      <button className="close"></button>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
    </div>);
  }
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TaskCard;
