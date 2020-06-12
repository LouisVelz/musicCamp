import React from 'react'
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component{
  constructor(props){
    super(props)
    // this.state = { selectedTrack: null }
  }
  
  componentDidMount(){
    this.props.fetchSongs()
  }

  handleClick(){
    e.preventDefault()
    this.setState({selectedTrack: e.currentTarget.value})

  }

  render(){
    let allSongs = this.props.songs.map(song =>{
      return <SongIndexItem
       key={song.id} song={song}

        />
    })


    return(
      <div className="song-index" >
        <ol>
          {allSongs}
        </ol>

        <img src={window.list5} width="350" height='350'/>


      </div>
    )
    }
}

export default SongIndex;