import React from 'react'
import PropTypes from 'prop-types'

const Info = (props) => {

  const { srcImg, header, instruction, link } = props;

  return (
    <section id="info" className="info">
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
