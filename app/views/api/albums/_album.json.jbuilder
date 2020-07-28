
json.extract! album, :id, :artist_id, :title, :description
  json.artist do
    json.artistName album.artist.username
    json.photo url_for(album.artist.photo) 
  end