

json.extract! album, :id, :artist_id, :title, :description
  json.artist do
    json.id album.artist.id
    json.artistName album.artist.username
  end