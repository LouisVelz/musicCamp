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
    const {currentUser, albums} = this.props
    let albumsList
    if(!currentUser || albums.length === 0) return <div>Fetching data...</div>
    else {
      albumsList = albums.map( album => {
        return (
          <li key={album.id}>
            <br />
            <img src={album.photoUrl} />
            <p><strong>{album.title}</strong></p>
            <br />
            <p><Link to={`/albums/${album.id}`}>Go to Album</Link></p>
          </li>);
      });
    }
    return(
      <div className="user-page">
        <h1>{currentUser.username}</h1>
        <ul>
          {albumsList}
        </ul>

      </div>
    )
  }
}

export default UserPage;