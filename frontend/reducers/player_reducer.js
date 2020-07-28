import { CURRENTLY_PLAYING, IS_PLAYING, IS_PAUSED } from '../actions/player_actions' 


const playerReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case CURRENTLY_PLAYING:
      return Object.assign({}, state, {song: action.song})
    case IS_PLAYING:
      return Object.assign({}, state, { isPlaying: true })
    case IS_PAUSED:
      return Object.assign({}, state, { isPlaying: false })
    default:
      return state
  }
}

export default playerReducer;