import React from 'react';

const TaskCard = (props) => {

  const { title, description } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>);
}

export default TaskCard;
