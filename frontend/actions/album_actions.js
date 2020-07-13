import * as AlbumApiUtil from './../util/album_api_util'

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  }
}

const removeAlbum = (albumId) => {
  return {
    type: DELETE_ALBUM,
    albumId
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  }
}

export const requestAlbums = () => (dispatch) => {
  return AlbumApiUtil.fetchAlbums().then(
    (albums) => dispatch(receiveAlbums(albums)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const requestAlbum = (albumId) => (dispatch) => {
  return AlbumApiUtil.fetchAlbum(albumId).then(
    (album) => dispatch(receiveAlbum(album)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createAlbum = (formData) => (dispatch) => {
  return AlbumApiUtil.postAlbum(formData).then(
    (album) => dispatch(receiveAlbum(album)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteAlbum = (albumId) => (dispatch) => {
  return AlbumApiUtil.deleteAlbum(albumId).then(
    () => dispatch(removeAlbum(albumId)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};