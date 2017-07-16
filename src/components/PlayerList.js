import React from 'react'
import PropTypes from 'prop-types'
import SubmitTeam from '../containers/SubmitTeam'

const PlayerList = ({ players, handleDeletePlayer, handleSubmitTeam, playersResponse, visibility }) => (
  <div>
    {visibility ? "TRUE" : "FALSE"}
    {players.map(player => (
      //<Player key={player.id} {...player} />
      <div key={player.id}>
          {player.battletag} <i className="fa fa-times-circle-o" onClick={() => handleDeletePlayer(player.battletag)} aria-hidden="true"></i>
      </div>
    ))}
      <button onClick={() => handleSubmitTeam(players, visibility)} aria-hidden="true">Submit Team</button>
      <div>
        {playersResponse.isFetching ? "fetching" : ''}
      </div>
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