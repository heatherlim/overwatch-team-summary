import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'
import SubmitTeam from '../containers/SubmitTeam'

const PlayerList = ({ players }) => (
  <div>
    {players.map(player => (
      <Player key={player.id} {...player} />
    ))}
      <SubmitTeam players={players}/>
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