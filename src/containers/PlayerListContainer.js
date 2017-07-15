import { connect } from 'react-redux'
import { toggleTodo, removePlayer } from '../actions'
import PlayerList from '../components/PlayerList'

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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