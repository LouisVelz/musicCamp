

json.array! @albums do |album|
  json.partial! 'api/albums/album', album: album
  json.photoUrl url_for(album.photo)
  # json.artist do
  #   json.id album.artist.id
  #   json.artistName album.artist.username
  # end
end