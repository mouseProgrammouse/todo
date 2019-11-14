import React from 'react'
import PropTypes from 'prop-types'
import './Info.css'

const Info = (props) => {

  const { srcImg, header, instruction, link } = props;

  return (
    <section id="info" className="info">
      <div className="header">
        <h2>{header}</h2>
      </div>
      <div className="main">
        <img src={srcImg} alt="wall with tasks"/>
        <div className="how-to">
          <h3>{instruction.header}</h3>
          <p>{instruction.description}</p>
          <ul>
          {instruction.steps.map((step,index)=>(
            <li key={index}>{step}</li>
          ))}
          </ul>
          <a href={link}>Download project</a>
        </div>
      </div>
    </section>
  );
}

Info.propTypes = {
  srcImg: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  instruction: PropTypes.object,
  link: PropTypes.string.isRequired,
}

export default Info
