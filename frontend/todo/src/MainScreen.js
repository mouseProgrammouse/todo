import React, {Component} from 'react'
import PropTypes from 'prop-types'

const MainScreen = (props) => {

  const { imgSrc, header, quote} = props;

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
        <img src={imgSrc} alt="todo list"/>
        <div className="description">
          <h1>{header}</h1>
          <q>{quote.text}</q>
          <span className="autor">{quote.autor}</span>
          <button>start</button>
        </div>
      </div>
    </secrtion>
  );
}

MainScreen.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired
}

export default MainScreen
