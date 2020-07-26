import { connect } from 'react-redux';
// import MainPage from './main_page'
// import { requestSongs } from './../../actions/song_actions';
// import { requestAlbums } from '../../actions/album_actions';
// import { requestUsers } from '../../actions/users_actions'
import { currentlyPlaying } from '../../actions/player_actions'
import Player from './audio_player'



const mSTP = (state) => {
  const { entities } = state
  

  return {
    songs: Object.values(entities.songs),
    currentlyPlaying: entities.songs[state.ui.player.song] ? entities.songs[state.ui.player.song] : null
  }
}

const mDTP = dispatch => {
  return {
    currentlyPlaying: (song) => dispatch(currentlyPlaying(song))
  }
}


export default connect(mSTP, mDTP)(Player);