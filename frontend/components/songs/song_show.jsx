import React from 'react'
import Player from './../audio_player/audio_player'


class SongShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSong(this.props.match.params.songId)
  }

  render(){
    const { song } = this.props
    if(!this.props.song){
      return <div>fetching data...</div>
    }else{
      return(
        <div className='show-song-main'>
          <audio controls>
            <source src={`${song.songUrl}`} type="audio/mpeg"/>
          </audio>
          {/* <p>{song.title}</p>
          <p>{song.track_num}</p>
          <p>{song.artist_id}</p>
          <p>{song.album_id}</p>
          <p>{song.description}</p> */}
          <Player song={song}/>
        </div>
      )
    }
  }
}

export default SongShow;
