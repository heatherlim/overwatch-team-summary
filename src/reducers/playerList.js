const playerList = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_PLAYERS_LIST':
      return Object.assign({}, state, {
        visibility: !action.visibility
      })
    default:
    return Object.assign({}, state, {
      visibility: true
    })
  }
}

export default playerList