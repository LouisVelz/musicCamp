

json.partial! 'api/songs/song', song: @song
if @song.photo.attached?
  json.photoUrl url_for(@song.photo)
else
  json.photoUrl image_url('avocado.png')
end
json.album do
  json.albumName @song.album.title
  json.photo  url_for(@song.album.photo)
end
json.download rails_blob_path(@song.song, disposition: 'attachment')
json.artist do
  json.photo url_for(@song.artist.photo) 
end