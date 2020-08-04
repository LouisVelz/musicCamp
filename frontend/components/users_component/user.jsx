import React from 'react'
import AlbumIndex from '../albums/album_index_container'

class UserPage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)

  }

  render(){
    const {artist} = this.props
    if(!artist){
      return <div>Fetching data...</div>
    } else {
      return(
        <div className="artist-page">
          <h1>{artist.username}</h1>
          {/* <AlbumIndex fetchAlbums={this.props.fetchAlbums} userId = {artist.id}/> */}
          <AlbumIndex userId = {artist.id}/>
        </div>
      )
    }
  }
}

export default UserPage;