import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Player from './../audio_player/audio_player'



class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { audioFiles: []}

  }

  componentDidMount(){
    this.props.fetchAlbums()
  }


  render(){

 
    let plusSing = <FontAwesomeIcon icon={faPlus} size='sm'/>
    const { list } = this.state
    let chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size='sm' />
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size='sm' />


    
    let albumsList
    if(this.props.albums.length === 0){
      return <div>Loading...</div>
    }else {
      albumsList= this.props.albums.map( album => {
        return(
          <li key={album.id}>
            <img src={album.photoUrl} />
            <br/>
            <div className='albumsText'>
              <p><strong>{album.title}</strong></p>
              <br/>
              <p>{album.artist.artistName}</p>
              <br/>
              <p><Link to={`/albums/${album.id}`}>Go to Album</Link></p>
            </div>
          </li>)
      })
    }
      



    let userEmail
    if (this.props.currentUser) {
      userEmail = this.props.currentUser.email
    } else {
      userEmail = "Enter Email"
    }

    return(
      <div className="main">


          <ArtistsMain fetchUsers= {this.props.fetchUsers} />

          <div className="main-text">
            <p>Fans have paid artists <strong>$525 million</strong> using Musiccamp, and <strong>$18.7 million</strong> in the last 30 days alone.</p>
          </div>
          <div className="selling-now">
            <Link to='/home'>SELLING RIGHT NOW</Link>
          </div>

          <SellingNow />


          <div className="musiccamp-daily">

            <div className="musiccamp-daily-link">
              <Link to='/'>MUSICCAMP DAILY </Link>
            </div>

            <div className="daily-list">
              <ul>
                {albumsList[0]}
                {albumsList[1]}
                {albumsList[2]}
              </ul>
            </div>

            <div className="bottom-list">
              <ul >
                {albumsList.slice(3,8)}
              </ul>
            </div>

            <div className="more-button">
              <button>more   {plusSing}</button>
            </div>

            <div className="get-the-best-text">
              <p>Get the best of Musiccamp Daily, delivered every Friday</p>
            </div>
              
            <div className="user-input-email">
              <input type="text" placeholder={userEmail}/>
              <button>SIGN UP</button>
            </div>
            <div className="new-and-notable">
              <p>NEW AND NOTABLE</p>
              <p><button>{chevronLeft}</button><button>{chevronRight}</button></p>
            </div>

            <div className="new-and-notable-list">
              <ul>
                {albumsList.slice(8,13)}
              </ul>
            </div>
          </div>

          <DiscoverBar/>

          <div className="audio-player-main">
            {/* <Player /> */}
          </div>
      </div>
    )
  }
}


class ArtistsMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {users: []}
  }
  componentDidMount(){
    this.props.fetchUsers().then(users => this.setState({users: users.users}))
  }

  render(){
    if (this.state.users.length === 0 ) return <div>Loading...</div>
    let first = this.state.users[0]
    let second = this.state.users[1]
    let third = this.state.users[3]
    let forth = this.state.users[4]
    return(
      <div className="main-images-list">
        <div className="larger-image">
          <div className='larger-caption'>
            <h2><Link to={`/users/${first.id}`}>{first.username}</Link></h2>
            {first.description ? <p>{first.description}</p> : null}
          </div>
          <img src={first.photoUrl} />
        </div>
        <div className="smaller-image">
          <ul >
            <li className='list'>
              <div className='smaller-caption'>
                <h4><Link to= {`/users/${second.id}`}>{second.username}</Link></h4>
                {second.description ? <p>{second.description}</p> : null}
              </div>
              <img src={second.photoUrl} />
            </li>
            <li className='list'>
              <div className='smaller-caption'>
                <h4><Link to={`/users/${third.id}`}>{third.username}</Link></h4>
                {third.description ? <p>{third.description}</p> : null}
              </div>
              <img src={third.photoUrl} />
            </li>
            <li className='list'>
              <div className='smaller-caption'>
              <h4><Link to={`/users/${forth.id}`}>{forth.username}</Link></h4>
              {forth.description ? <p>{forth.description}</p> : null}
              </div>
              <img src={forth.photoUrl} />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
class SellingNow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: arrayOfitems }
    this.intervalId
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      arrayOfitems = arrayOfitems.slice(1).concat(arrayOfitems.slice(0, 1))
      this.setState({ list: arrayOfitems })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

    render(){
      let sellingNow = this.state.list.map((list, index) => {
        return (
          <li key={index}>
            <br />
            <img src={list.src} />
            <br />
            <p><strong>{list.album}</strong></p>
            <br />
            <p>{list.artist}</p>
            <br />
            <p>{list.sold}</p>
            <br />
            <p>{list.country}</p>
          </li>
        )
      })
      return(
        <div className="selling-now-list">
          <ul>
            {sellingNow}
          </ul>
        </div>
      )
    }


}
let arrayOfitems = [
  {
    src: window.list1,
    album: 'Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $5',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list2,
    album: 'Some Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $10',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list3,
    album: 'Other Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $18',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list4,
    album: 'Another Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $25',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list5,
    album: 'Yet Another Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $9',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list6,
    album: 'Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $16',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list7,
    album: 'Simply ALmbum',
    artist: 'By a Music Artist',
    sold: 'sold for $15',
    country: 'In 🇺🇸 United states'
  },
  {
    src: window.list8,
    album: 'Music album',
    artist: 'By a Music Artist',
    sold: 'sold for $13',
    country: 'In 🇺🇸 United states'
  },


]

class DiscoverBar extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size='sm' />
    return(
      <div className="discover-bar">
        <ul className='discover-bar-top'>
          <li>all</li>
          <li>electronic</li>
          <li>rock</li>
          <li>metal</li>
          <li>experimental</li>
          <li>punk</li>
          <li>folk</li>
          <li>pop</li>
          <li>ambient</li>
          <li>soundtrack</li>
          <li>jazz</li>
          <li>{chevronRight}</li>
        </ul>
        <ul className='discover-bar-medium'>
          <li>best-selling</li>
          <li>new arrivals</li>
          <li>artist-recommended</li>
        </ul>
        <ul className='discover-bar-bottom'>
          <li>any formay</li>
          <li>digital</li>
          <li>vinyl</li>
          <li>acompact disc</li>
          <li>cassette</li>
        </ul>
      </div>
    )
  }

}

export default MainPage;


