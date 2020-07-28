import { connect } from 'react-redux';
import AlbumShow from './album_show'
import { requestAlbum } from '../../actions/album_actions';


const mSTP = (state, ownProps) => {

  return {
    album: state.entities.albums[ownProps.match.params.albumId],
  }
}

const mDTP = dispatch => ({
  fetchAlbum: (albumId) => dispatch(requestAlbum(albumId))
})

export default connect(mSTP, mDTP)(AlbumShow);