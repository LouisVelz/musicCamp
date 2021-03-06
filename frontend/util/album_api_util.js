export const fetchAlbums = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/albums`,
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
  });
};

export const postAlbum = (formData) => {
  return $.ajax({
    method: "post",
    url: "/api/albums",
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const deleteAlbum = (albumId) => {
  return $.ajax({
    method: "delete",
    url: `api/albums/${albumId}`,
  });
};
