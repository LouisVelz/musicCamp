
 debugger

json.array @songs do |song|
  json.partial! 'api/songs/song', song: song
  json.songUrl url_for(song.song)
end

debugger