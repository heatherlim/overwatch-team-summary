import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removePlayer } from '../actions'

let RemovePlayer = ({ battletag, dispatch }) => {
  return (
    <i className="fa fa-times-circle-o" onClick={() => dispatch(removePlayer(battletag))} aria-hidden="true"></i>
  )
}
RemovePlayer = connect()(RemovePlayer)

RemovePlayer.propTypes = {
  battletag: PropTypes.string.isRequired
}

export default RemovePlayer









