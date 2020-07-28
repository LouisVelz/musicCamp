import React from 'react'
import SongIndexItem from './song_index_item'



class SongIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchSongs(this.props.albumId)
    .then(songs => {
      this.props.playing(songs.songs[0])
    })


  }

  render(){

    if (!this.props.songs){ 
      return <div>fetching data...</div>
    } else {
      return (
        <div className="song-index">
          <ul>
            {this.props.songs.map((song, index) => {
              return (
                  <SongIndexItem
                    key={song.id}
                    song={song}
                    playing={this.props.playing}
                    index={index}
                    currentlyPlaying = {this.props.currentlyPlaying}
                  />
              );              
            })}
          </ul>
        </div>
      );
    }
    }
}

export default SongIndex;