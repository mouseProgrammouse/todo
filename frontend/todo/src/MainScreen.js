import React, {Component} from 'react'

const MainScreen = (props) => {

  const { imgSrc, header, quote, autor } = props;

  return (
    <secrtion className="main">
      <nav>
        <span className="logo">ToDo</span>
        <div>
          <a href="#">git</a>
          <a href to="#">info</a>
        </div>
      </nav>
      <div className="main-screen">
        <img src="#" alt="todo list"/>
        <div className="description">
          <h1>{header}</h1>
          <q>{quote}</q>
          <span className="autor">{autor}</span>
          <button>start</button>
        </div>
      </div>
    </secrtion>
  );
}

export default MainScreen
