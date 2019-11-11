import React, {Component} from 'react'
import TaskCard from './TaskCard'
import './App.css'

class App extends Component {

  state = {
    tasksList: []
  };

  componentDidMount = () => {
    //get and set data for tasks' list
    this.setState({ tasksList: [{
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
      }]});
  }

  //update task by id
  updateTaskById = (id, newTitle, newDescription) => {
    let newTasksList = this.state.tasksList;
    //find and update task
    //TODO:
    //set new state
    this.setState ({
      tasksList: newTasksList
    });
  }

  //delete task by id
  deleteTaskById = (id) => {
    //TODO:
    this.setState ({
      tasksList: this.state.tasksList.filter(task => task.id!==id)
    });
  }

  addNewTask = (title, description) => {
    let newTasksList = this.state.tasksList;
    //add task if title and description != ''
    //TODO:
    //set new state
    this.setState ({
      tasksList: newTasksList
    });
  }

  sortTasksByDate = () => {
    let newTasksList = this.state.tasksList;
    //sort array
    //TODO:
    //set new state
    this.setState ({
      tasksList: newTasksList
    });
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
