import React from 'react'



class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
  }

  render() {
    const { song } = this.props
    if (!this.props.song) {
      return <div>fetching data...</div>
    } else {
      return (
        <div className='show-song-main'>
          <div>

            <p>Now Playing:</p>

            <p>Title: {song.title}</p>
            <audio controls>
              <source src={`${song.songUrl}`} type="audio/mpeg" />
            </audio>
            <p>Track Number: {song.track_num}</p>
            <p>Artist: {song.artist_id}</p>
            <p>Album: {song.album_id}</p>
            <p>Song Description: {song.description}</p>

          </div>

          <img src={window.avocado} width="350" height="350" alt="" />

        </div>
      )
    }
  }
}

export default AlbumShow;
