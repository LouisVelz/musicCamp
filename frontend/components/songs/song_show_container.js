import { connect } from 'react-redux';
import { requestSong } from './../../actions/song_actions';
import SongShow from './song_show'
import { currentlyPlaying, isPaused, isPlaying } from '../../actions/player_actions'
import { togglePlay } from './../../util/player_util'


const mSTP = (state, ownProps) => {
  return {
    song: state.entities.songs[ownProps.match.params.songId],
    currentlyPlaying: state.ui.player.song,
    isAudioPlaying: state.ui.player.isPlaying
  }
}

const mDTP = dispatch => ({
  fetchSong: (songId) => dispatch(requestSong(songId)),
  playing: (song) => dispatch(currentlyPlaying(song)),
  isPaused: () => dispatch(isPaused()),
  togglePlay: () => togglePlay(() => dispatch(isPlaying()),() => dispatch(isPaused()))
});

export default connect(mSTP, mDTP)(SongShow);
