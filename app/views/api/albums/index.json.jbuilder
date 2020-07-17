

json.array! @albums do |album|
  json.partial! 'api/albums/album', album: album
  json.photoUrl url_for(album.photo)
  json.user do
    json.id album.artist.id
    json.username album.artist.username
  end
end