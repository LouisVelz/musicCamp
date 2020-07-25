json.extract! song, :id, :artist_id, :album_id, :title, :track_num, :description\
  # json.artist do
  #   json.id album.artist.id
    json.artistName song.artist.username
  # end
  json.albumName song.album.title
json.songUrl url_for(song.song)
json.photoUrl url_for(song.photo)