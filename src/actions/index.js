let nextPlayerId = 0
export const addPlayer = text => {
  return {
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    text
  }
}

