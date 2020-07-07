

json.array! @albums do |album|
  json.partial! 'api/albums/album', album: album
  json.photoUrl url_for(album.photo)
end