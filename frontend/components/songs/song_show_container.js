import { connect } from 'react-redux';
import { requestSong } from './../../actions/song_actions';
import SongShow from './song_show'

const mSTP = (state, ownProps) => {

  return {
    song: state.entities.songs[ownProps.match.params.songId]
  }
}

const mDTP = dispatch => ({
  fetchSong: (songId) => dispatch(requestSong(songId))
})

export default connect(mSTP, mDTP)(SongShow);