import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const PlayerList = ({ players }) => (
  <div>
    {players.map(player => (
      <Player key={player.id} {...player} />
    ))}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      battletag: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PlayerList