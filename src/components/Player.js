import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ text }) => (
  <li>
    {text}
  </li>
)

Player.propTypes = {
  text: PropTypes.string.isRequired
}

export default Player