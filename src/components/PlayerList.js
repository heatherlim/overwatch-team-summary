import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const PlayerList = ({ players }) => (
  <ul>
    {players.map(player => (
      <Player key={player.id} {...player} />
    ))}
  </ul>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PlayerList