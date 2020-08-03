json.extract! song, :id, :artist_id, :album_id, :title, :track_num, :description

json.songUrl url_for(song.song)
json.artist do
  json.artistName song.artist.username
end