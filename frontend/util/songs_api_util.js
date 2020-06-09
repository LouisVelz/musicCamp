
export const fetchSongs = () => {

  return $.ajax({
    url: '/api/songs'
  })
}

export const fetchSong = (songId) => {
  return $.ajax({
    url: `/api/songs/${songId}`
  })
}

export const postSong = (formData) => {

  return $.ajax({
    method: "post",
    url: '/api/songs',
    data: formData,
    contentType: false,
    processData: false
  })
}   


export const deleteSong = (songId) => {
  return $.ajax({
    method: "delete",
    url: `api/songs/${songId}`
  })
}