import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitTeam } from '../actions'

let SubmitTeam = ({ players, dispatch }) => {
  return (
    <button onClick={() => dispatch(submitTeam(players))} aria-hidden="true">Submit Team</button>
  )
}
SubmitTeam = connect()(SubmitTeam)

SubmitTeam.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object)
}

export default SubmitTeam