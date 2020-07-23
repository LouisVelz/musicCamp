import React from 'react'
import { Link } from 'react-router-dom'
import AlbumIndex from '../albums/album_index'

class UserPage extends React.Component{
  constructor(props){
    super(props)
    this.randomDate.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchAlbums(this.props.match.params.userId)

  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


  render(){
    const {artist } = this.props

    return(
      <div className="artist-page">
        <h1>{artist.username}</h1>
        <AlbumIndex albums = {this.props.albums} />
      </div>
    )
  }
}

export default UserPage;