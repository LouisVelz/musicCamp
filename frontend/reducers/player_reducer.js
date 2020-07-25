import { CURRENTLY_PLAYING } from '../actions/player_actions' 


const playerReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case CURRENTLY_PLAYING:
      return action.song
    default:
      return state
  }
}

export default playerReducer;