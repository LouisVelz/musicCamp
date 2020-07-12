import React from 'react'
import AlbumIndexItem from './album_index_item'


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { selectedTrack: null }
  }

  componentDidMount() {
    this.props.fetchAlbums()
  }

  handleClick() {
    e.preventDefault()
    this.setState({ selectedTrack: e.currentTarget.value })

  }

  render() {
    let allAlbums = this.props.albums.map(album => {
      return <AlbumIndexItem
        key={album.id} album={album}

      />
    })


    return (
      <div className="song-index" >
        <ol>
          {allAlbums}
        </ol>
      </div>
    )
  }
}

export default AlbumIndex;