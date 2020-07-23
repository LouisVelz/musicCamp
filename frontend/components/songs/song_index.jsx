import React from 'react'
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component{
  constructor(props){
    super(props)

  }
  

  // handleClick(){
  //   e.preventDefault()
  //   this.setState({selectedTrack: e.currentTarget.value})

  // }

  render(){

    return(
      <div className="song-index" >
        <ol>
          {this.props.songs.map(song => {
            return <SongIndexItem
              key={song.id} song={song}
            />
          })}
        </ol>
      </div>
    )
    }
}

export default SongIndex;