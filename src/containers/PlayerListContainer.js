import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import PlayerList from '../components/PlayerList'

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

const PlayerListContainer = connect(
  mapStateToProps
)(PlayerList)

export default PlayerListContainer