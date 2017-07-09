let nextPlayerId = 0
export const addPlayer = battletag => {
  return {
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    battletag
  }
}

export const removePlayer = battletag => {
  return {
    type: 'REMOVE_PLAYER',
    battletag
  }
}

export const submitTeam = players => {
  return {
    type: 'SUBMIT_TEAM',
    players
  }
}

