import React, {Component} from 'react';
import TaskCard from './TaskCard';
import './App.css';

class App extends Component {

  state = {
    tasksList : [{
          TimeSt: "2019-09-28T17:12:51.346962-07:00",
          description: "Add documentation for each http-method.",
          id: "dd8797c8-8af4-4683-ab93-38db1cf408d9",
          project: "ToDo API"
      },
      {
          TimeSt: "2019-09-28T17:12:51.346962-07:00",
          description: "Add documentation for each http-method.",
          id: "dd8797c8-8af4-4683-ab93-38db1cf408d9",
          project: "ToDo API"
      }]
  };

  componentWillMount = () => {
    //get and set data for tasks' list
  }

  render () {
    return (
      <div className="App">
        <TaskCard title={'sa[asds]'} description={'asdsad'}/>
      </div>
    );
  }
}

export default App;
