import { connect } from "react-redux";
import { createAlbum } from "./../../actions/album_actions";
import AlbumForm from "./album_form";

const mSTP = (state) => ({
  errors: state.errors.albums,
  currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = (dispatch) => ({
  createAlbum: (formData) => dispatch(createAlbum(formData)),
});

export default connect(mSTP, mDTP)(AlbumForm);
