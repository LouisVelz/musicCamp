import React from 'react'
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: []}
  }
  

  // handleClick(){
  //   e.preventDefault()
  //   this.setState({selectedTrack: e.currentTarget.value})

  // }
  componentDidMount() {
    this.props.fetchSongs(this.props.albumId)
    .then(songs => this.setState({ songs: songs.songs }))
  }

  render(){

    if (this.state.songs.length === 0){ 
      return <div>fetching data...</div>
    } else {
      return(
        <div className="song-index" >
          <ol>
            {this.state.songs.map(song => {
              return <SongIndexItem
                key={song.id} song={song}
              />
            })}
          </ol>
        </div>
      )
    }
    }
}

export default SongIndex;