import React from 'react'
import { Link } from 'react-router-dom'

class UserPage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchAlbums(this.props.match.params.userId)
  }

  render(){
    const {artist, albums} = this.props
    let albumsList
    if(!artist || albums.length === 0) return <div>Fetching data...</div>
    else {
      albumsList = albums.map( album => {
        return (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <img src={album.photoUrl} />
            </Link>
            <p>
              <strong>{album.title}</strong>
            </p>
            <p>
              <Link to={`/albums/${album.id}`}>{album.description}</Link>
            </p>
          </li>);
      });
    }
    return(
      <div className="artist-page">
        <h1>{artist.username}</h1>
        <ul className='artist-albums'>
          {albumsList}
        </ul>

      </div>
    )
  }
}

export default UserPage;