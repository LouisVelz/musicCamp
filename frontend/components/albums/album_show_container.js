import { connect } from 'react-redux';
import AlbumShow from './album_show'
import { requestAlbum } from '../../actions/album_actions';
import { requestSongs } from '../../actions/song_actions';
import { currentlyPlaying } from '../../actions/player_actions';


const mSTP = (state, ownProps) => {

  return {
    album: state.entities.albums[ownProps.match.params.albumId],
  }
}

const mDTP = dispatch => ({
  fetchAlbum: (albumId) => dispatch(requestAlbum(albumId))
  // fetchAlbumSongs: (albumId) => dispatch(requestSongs(albumId)),
  // playing: (song) => dispatch(currentlyPlaying(song))
})

export default connect(mSTP, mDTP)(AlbumShow);