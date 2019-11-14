import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './MainScreen.css'

const MainScreen = (props) => {

  const { imgSrc, header, quote, callToAction} = props;

  return (
    <section className="main">
      <nav>
        <span className="logo">ToDo</span>
        <div>
          <a href="https://github.com/mouseProgrammouse/todo"><FontAwesomeIcon icon={["fab", "git"]}/></a>
          <a href to="#info"><FontAwesomeIcon icon={faInfoCircle}/></a>
        </div>
      </nav>
      <div className="main-screen">
        <img src={imgSrc} alt="todo list"/>
        <div className="description">
          <h1>{header}</h1>
          <q>{quote.text}</q>
          <span className="autor">{quote.autor}</span>
          <a href={callToAction.href}>{callToAction.text}</a>
        </div>
      </div>
    </section>
  );
}

MainScreen.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired,
  callToAction: PropTypes.object.isRequired
}

export default MainScreen
