import React from 'react'
import SongIndexItem from './song_index_item'



class SongIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       selectedTrack : null}

    this.handleClick = this.handleClick.bind(this)
  }
  

  handleClick(e){
    e.preventDefault()
    // this.setState({selectedTrack: this.state.songs[e.currentTarget.dataset.id]})
    this.setState({selectedTrack: this.props.songs[e.currentTarget.dataset.id]})
    // this.props.currentlyPlaying(e.currentTarget.dataset.id);
    this.props.playing(this.state.selectedTrack)

  }

  componentDidMount() {
    this.props.fetchSongs(this.props.albumId)
    .then(songs => {

      this.setState({ selectedTrack: songs.songs[0] })
      this.props.playing(this.props.songs[0])

    })


  }

  render(){
    debugger
    // const {currentlyPlaying} = this.props
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
                    handleClick={this.handleClick}
                    index={index}
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