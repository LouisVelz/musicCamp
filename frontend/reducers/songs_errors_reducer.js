import { RECEIVE_ERRORS, RECEIVE_SONGS, RECEIVE_SONG} from './../actions/song_actions'
let _defaultErrors = []

const songsErrorsReducer = (errors = _defaultErrors, action) => {

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_SONG:
      return _defaultErrors
    case RECEIVE_SONGS:
      return _defaultErrors
    default:
      return _defaultErrors
  }
}

export default songsErrorsReducer;