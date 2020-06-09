import React from 'react'
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchSongs()
  }

  render(){
    let allSongs = this.props.songs.map(song =>{
      return <SongIndexItem key={song.id} song={song} />
    })

  
    return(
      <ul>
        {allSongs}
      </ul>
    )
  }
}

export default SongIndex;