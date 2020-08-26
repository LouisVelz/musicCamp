import { connect } from "react-redux";
import SongIndexItem from "./song_index_item";
import { currentlyPlaying, isPaused } from "../../actions/player_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.songs,
    currentlyPlaying: state.ui.player.song,
    isPlaying: state.ui.player.isPlaying,
  };
};

const mDTP = (dispatch) => {
  return {
    playing: (song) => dispatch(currentlyPlaying(song)),
    isPaused: () => dispatch(isPaused()),
  };
};

export default connect(mSTP, mDTP)(SongIndexItem);
