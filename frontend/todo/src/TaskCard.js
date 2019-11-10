import React from 'react';

class TaskCard extends React.Component {

  constructor (props) {
    super(props);
  }

render() {
  const { title, description } = this.props;
  return (
    <div className="card">
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
    </div>);
  }
}

export default TaskCard;
