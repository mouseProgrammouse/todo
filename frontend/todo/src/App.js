import React, {Component} from 'react'
import TasksList from './TasksList'
import MainScreen from './MainScreen'
import Info from './Info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import todoListMain from './img/todo_list.svg'
import './App.css'

library.add(fab)
//information about backend server
const backendServer = {
    host:'http://localhost',
    port:'8000'
  }

const data = {
  mainPage: {
    header: 'Let’s get more productive!',
    quote: {
      text: 'A dream doesn\'t become reality through magic; it takes sweat, determination and hard work.',
      autor: 'Colin Powell'
    },
    href: '#tasks',
    imgSrc: todoListMain,
    callToAction: {
      href: '#tasks',
      text: 'Let\'s try'
    }
  }
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
      this.setTaskList(data)
    })
    .catch(error => console.error('Get tasks: '+error));
  }

  //update task by id
  updateTaskById = (id, newTitle, newDescription) => {
    //find and update task
    fetch(backendServer.host+':'+backendServer.port+'/api/v1/tasks/'+id+'?description="'+newDescription+'"&project="'+newTitle+'"', {method:'PUT'})
    .then(res=>{
      //set new state
      if(res.ok) this.getTaskList();
    })
    .catch(e=>console.error('Update task: '+e));
  }

  //delete task by id
  deleteTaskById = (id) => {
    fetch(backendServer.host+':'+backendServer.port+'/api/v1/tasks/'+id, {method:'DELETE'})
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
        <MainScreen imgSrc={data.mainPage.imgSrc}
          header={data.mainPage.header}
          quote={data.mainPage.quote}
          callToAction={data.mainPage.callToAction}/>
        <section id="tasks" className="tasks">
          <div className="top">
            <h2>Your current tasks</h2>
            <div className="sort">
              <button><FontAwesomeIcon icon={faArrowCircleDown}/></button>
              <button><FontAwesomeIcon icon={faArrowCircleUp}/></button>
            </div>
          </div>
          <TasksList
          updateTask={this.updateTaskById}
          addTask={this.addNewTask}
          deleteTask={this.deleteTaskById}
          tasksList={this.state.tasksList}/>
        </section>
        <Info/>
      </div>
    );
  }
}

export default App;
