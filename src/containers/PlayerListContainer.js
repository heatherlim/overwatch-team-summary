import { connect } from 'react-redux'
import { toggleTodo, removePlayer, fetchTeamInfo, togglePlayerList } from '../actions'
import PlayerList from '../components/PlayerList'

const mapStateToProps = state => {
  debugger;
  return {
    players: state.players,
    playersResponse: state.playersResponse,
    visibility: state.playerList.visibility
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitTeam: (players, visibility) => {
      dispatch(fetchTeamInfo(players)),
      dispatch(togglePlayerList(visibility))
    },
    handleDeletePlayer: (battletag) => {
      dispatch(removePlayer(battletag))
    }
  }
}


const PlayerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default PlayerListContainer