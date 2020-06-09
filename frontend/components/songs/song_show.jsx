import React from 'react'


class SongShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSong(this.props.params.match.songId)
  }

  render(){
    const { song } = this.props
    return(
      <div>
        <audio controls>
          <source src={`${song.songUrl}`} type="audio/mpeg"/>
        </audio>
        <p>{song.title}</p>
        <p>{song.track_num}</p>
        <p>{song.artist_id}</p>
        <p>{song.album_id}</p>
        <p>{song.description}</p>
      </div>
    )
  }
}

export default SongShow;
