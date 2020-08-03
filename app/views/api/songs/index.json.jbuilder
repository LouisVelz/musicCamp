


json.array! @songs do |song|
  if @album_id
    json.partial! 'api/songs/song', song: song
  else
    if song.photo.attached?
      json.partial! 'api/songs/song', song: song
      json.photoUrl url_for(song.photo)
    end
  end
end


