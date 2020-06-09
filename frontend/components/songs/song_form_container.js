import { connect } from 'react-redux';
import { createSong } from './../../actions/song_actions';
import SongForm from './song_form'

const mSTP = () => ({
  song: {title:"", track_num: "", description:"", album_id: "", artist_id:"" }
})

const mDTP = dispatch => ({
  createSong: (song) => dispatch(createSong(song))
})

export default connect(mSTP, mDTP)(SongForm);