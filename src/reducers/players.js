const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: action.id,
          battletag: action.battletag
        }
      ]
    case 'REMOVE_PLAYER':
      return state.filter(player => player.battletag != action.battletag)
    default:
      return state
  }
}

export default players