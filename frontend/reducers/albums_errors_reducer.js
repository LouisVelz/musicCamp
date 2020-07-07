import {
  RECEIVE_ALBUM_ERRORS,
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
} from "./../actions/album_actions";
let _defaultErrors = [];

const albumErrorsReducer = (errors = _defaultErrors, action) => {
  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case RECEIVE_ALBUMS:
      return _defaultErrors;
    case RECEIVE_ALBUM:
      return _defaultErrors;
    default:
      return _defaultErrors;
  }
};

export default albumErrorsReducer;
