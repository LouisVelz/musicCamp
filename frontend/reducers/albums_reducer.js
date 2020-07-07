import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  DELETE_ALBUM,
} from "./../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    case DELETE_ALBUM:
      let newState = Object.assign({}, state);
      delete newState[action.albumId];
      return newState;
    default:
      return state;
  }
};

export default albumsReducer;
