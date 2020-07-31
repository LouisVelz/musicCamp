# json.users do 
  json.array! @users do |user|
    json.extract! user, :id
    json.title user.username
    json.type 'users'
    json.label 'ARTIST'
    json.photo url_for(user.photo)
    # json.photoUrl url_for(album.photo)
  end
# end

# json.albums do
  json.array! @albums do |album|
    json.extract! album, :id, :title
    json.type 'albums'
    json.label 'ALBUM'
    json.photo url_for(album.photo)
  end
# end

# json.songs do
  json.array! @songs do |song|
    json.extract! song, :id, :title
    json.type 'songs'
    json.label 'SONG'
    json.photo url_for(song.photo)
  end
# end