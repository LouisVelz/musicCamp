import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { requestAlbum } from "../../actions/album_actions";
import { currentlyPlaying, isPaused } from "../../actions/player_actions";

const mSTP = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
  };
};

const mDTP = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(requestAlbum(albumId)),
  playing: (song) => dispatch(currentlyPlaying(song)),
  isPaused: () => dispatch(isPaused()),
});

export default connect(mSTP, mDTP)(AlbumShow);
