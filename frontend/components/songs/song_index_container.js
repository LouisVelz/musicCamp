import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'

const mSTP = (state) => {

  return {
    
    //Object.values if jbuilder doesn't export array
    // songs: state.entities.songs,
    songs: Object.values(state.entities.songs),
    errors: state.errors.songs
    
  }
}

const mDTP = dispatch => {
  return {
    fetchSongs: () => dispatch(requestSongs())
  }
}

export default connect(mSTP, mDTP)(SongIndex)