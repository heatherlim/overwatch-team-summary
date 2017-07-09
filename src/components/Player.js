import React from 'react'
import PropTypes from 'prop-types'
import { removePlayer } from '../actions'
import RemovePlayer from '../containers/RemovePlayer'

const Player = ({ battletag, dispatch }) => (
  <div>
    {battletag} <RemovePlayer battletag={battletag}/>
  </div>
)

Player.propTypes = {
  battletag: PropTypes.string.isRequired
}

export default Player