json.extract! song, :id, :artist_id, :album_id, :title, :track_num, :description
json.album do
  json.albumName song.album.title
  json.photoUrl  url_for(song.album.photo)
end
json.songUrl url_for(song.song)
json.photoUrl url_for(song.photo)
  json.artist do
    json.artistName song.artist.username
    json.photo url_for(song.artist.photo) 
  end