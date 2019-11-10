import React from 'react';

const TaskCard = (props) => {

  const { project, description } = props;

  return (
    <div className="card">
      <h3>{project}</h3>
      <p>{description}</p>
    </div>);
}

export default TaskCard;
