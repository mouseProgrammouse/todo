import React, {Component} from 'react'
import TaskCard from './TaskCard'
import TasksList from './TasksList'
import './App.css'

//information about backend server
const backendServer = {
    host:'http://localhost',
    port:'8000'
  }

class App extends Component {
  state = {
      tasksList: []
  }

  componentDidMount = () => {
    //get and set data for tasks' list
    this.getTaskList();
  }

  setTaskList = (newTaskList) => {
    this.setState({tasksList: newTaskList})
  }

  getTaskList = () => {
    fetch(backendServer.host+':'+backendServer.port+'/api/v1/tasks',{method:'GET'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setTaskList(data)
    })
    .catch(error => console.error('Get tasks: '+error));
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
    fetch(backendServer.host+':'+backendServer.port+'/api/v1/tasks'+id, {method:'DELETE'})
    .then(res=>{
      if(res.ok) this.getTaskList();
    })
    .catch(e=>console.error('Delete task: '+e));
  }

  addNewTask = (title, description) => {
    //add task if title and description != ''
    if (title!=='' && title!==undefined && description!=='' && description!==undefined) {
      fetch(backendServer.host+':'+backendServer.port+'/api/v1/tasks?description="'+description+'"&project="'+title+'"', {method:'POST'})
      .then(res=>{ if (res.ok) {
        //update data
        this.getTaskList();
      }})
      .catch(e=>console.error('Add task: '+e));
    }
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
        <TasksList />
      </div>
    );
  }
}

export default App;
