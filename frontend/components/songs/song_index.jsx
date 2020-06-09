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

  // onClick = {() => this.setState({ selectedTrack: song.songUrl })
    return(
      <div className="song-index" >

        {/* <audio src={`${this.state.selectedTrack}`} controls height="200" width="300" /> */}

        <ul>
          {allSongs}
        </ul>

      </div>
    )
    }
}

export default SongIndex;