import React from 'react'
import SongIndexItem from './song_index_item'



class SongIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: [],
       selectedTrack : null}

    this.handleClick = this.handleClick.bind(this)
  }
  

  handleClick(e){
    e.preventDefault()
    this.setState({selectedTrack: this.state.songs[e.currentTarget.dataset.id]})
  }

  componentDidMount() {
    this.props.fetchSongs(this.props.albumId)
    .then(songs => {

      this.setState({ songs: songs.songs, selectedTrack: songs.songs[0] })

    })
  }

  render(){

    if (this.state.songs.length === 0){ 
      return <div>fetching data...</div>
    } else {
      return (
        <div className="song-index">
          <ul>
            {this.state.songs.map((song, index) => {
              return <SongIndexItem key={song.id} song={song} handleClick={this.handleClick} index={index}/>;
            })}
          </ul>
        </div>
      );
    }
    }
}

export default SongIndex;