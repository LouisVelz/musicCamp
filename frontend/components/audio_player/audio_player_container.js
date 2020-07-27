import { connect } from 'react-redux';
// import MainPage from './main_page'
// import { requestSongs } from './../../actions/song_actions';
// import { requestAlbums } from '../../actions/album_actions';
// import { requestUsers } from '../../actions/users_actions'
import { currentlyPlaying } from '../../actions/player_actions'
import Player from './audio_player'



const mSTP = (state) => {

  const { entities } = state
    // let currentSong = state.entities.songs[state.ui.player.song]
    //   ? state.entities.songs[state.ui.player.id]
    //   : null;
    debugger
     const currentSong = !!state.ui.player.song ? state.ui.player.song : null
     debugger
    // if(!currentSong && entities.songs){
    //    currentSong = entities.songs[0]
    // }

  return {
    songs: Object.values(entities.songs),
    currentlyPlaying:  currentSong 
  }
}

const mDTP = dispatch => {
  return null
  // { 
  //   currentlyPlaying: (song) => dispatch(currentlyPlaying(song))
  // }
}


export default connect(mSTP, mDTP)(Player);