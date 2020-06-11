import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AudioPlayer from './../audio_player/audio_player'
// import Player from './../audio_player/audio_player'


class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {list: arrayOfitems, audioFiles: []}
    this.intervalId
    // this.loadSongs = this.loadSongs.bind(this)
  }

  componentDidMount(){
    this.intervalId = setInterval(()=>{
      arrayOfitems = arrayOfitems.slice(1).concat(arrayOfitems.slice(0,1))
      this.setState({list: arrayOfitems})
    }, 3000)
    // this.props.fetchSongs()
    // this.loadSongs()

  }

  // loadSongs(){

  //   this.props.fetchSongs()

  //   this.setState({ songs: this.props.songs })
  // }

  // componentDidMount(){
  //   this.props.fetchSongs()
  // }
  // componentDidUpdate(provProps){
  //   if (prevProps.query !== this.props.query) {
  //     this.fetch();
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render(){

    // let audioPlayer
    // if (!this.props.songs || this.props.songs.length === 0) {

    //   audioPlayer = <div>Fetching songs....</div>;
    // }else{
    //   let audioFiles = this.props.songs.map(song => {

    //     return {
    //       src: song.songUrl,
    //       title: song.title,
    //       artist: song.artist
    //     }
    //   })
    //   audioPlayer = <AudioPlayer audioFiles={audioFiles} />
    // }
    




    let plusSing = <FontAwesomeIcon icon={faPlus} size='sm'/>
    const { list } = this.state
    let chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size='sm' />
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size='sm' />

    let songList = list.map((list, index) => {
      return(
      <li key = {index}>
        <br/>
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

    let otherList = otherItems.map((list, index) => {
      return <li key={index}>
      <br />
      <img src={list.src} />
 
      <p><strong>{list.album}</strong></p>
  
      <p>{list.artist}</p>
      <br />
      <p>{list.sold}</p>
      <br />
      <p>{list.country}</p>
    </li>
    })
      


    let menuBars 
    let userEmail
    if (this.props.currentUser) {
      menuBars = <div className="logged-in"></div>
      userEmail = this.props.currentUser.email
    } else {
      menuBars = <div className="not-logged-in"></div>
      userEmail = "Enter Email"
    }
    return(
      <div className="main">
          {menuBars}
          <div className="main-images-list">
            <div className="larger-image">
              <img src={window.musicianURL} />
            </div>
            <div className="smaller-image">
              <ul >
                <li><img src={window.guitarURL} /></li>
                <li><img src={window.monkeyURL} /></li>
                <li><img src={window.girl2URL} /></li>
              </ul>
            </div>
          </div>
          <div className="main-text">
            <p>Fans have paid artists <strong>$525 million</strong> using Bandcamp, and <strong>$18.7 million</strong> in the last 30 days alone.</p>
          </div>

          <div className="selling-now">
            <Link to='/home'>SELLING RIGHT NOW</Link>
          </div>

          <div className="selling-now-list">
            <ul>
              {songList}
            </ul>
          </div>

          <div className="musiccamp-daily">

            <div className="musiccamp-daily-link">
              <Link to='/home'>MUSICCAMP DAILY </Link>
            </div>

            <div className="daily-list">
              <ul >
              <li>
                <img src={window.list1} />
                <br/>
                <p><strong>Music album this is just some text on the side</strong>
                <br/>
                If you want to know more about this artists just click
                </p>
              </li>
              {otherList[1]}
              {otherList[2]}
              </ul>
            </div>
              <div className="bottom-list">
                <ul >
                  {otherList.slice(3,8)}
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
              {otherList.slice(8)}
            </ul>
          </div>
          </div>

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
          <div className="audio-player-main">
            {/* {audioPlayer} */}
          </div>
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
let otherItems = [
  {
    src: window.list1,
    album: 'Music album this is just some text on the side',
    artist: 'If you want to know more about this artists just click',
    sold: null,
    country: null
  },
  {
    src: window.list2,
    album: 'Some new music is coming your way ',
    artist: 'Listen to music all day',
    sold: null,
    country: null
  },
  {
    src: window.list3,
    album: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quidem voluptas totam ',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, magnam?',
    sold: null,
    country: null
  },
  {
    src: window.list4,
    album: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima.',
    artist: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    sold: null,
    country: null
  },
  {
    src: window.list5,
    album: 'Yet Another Music album',
    artist: 'By a Music Artist',
    sold: null,
    country: null
  },
  {
    src: window.list6,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    artist: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, beatae?',
    sold: null,
    country: null
  },
  {
    src: window.list7,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit!',
    artist: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod alias saepe reprehenderit nemo.',
    sold: null,
    country: null
  },
  {
    src: window.list8,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },
  {
    src: window.cartoonURL,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },
  {
    src: window.bandURL,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },
  {
    src: window.microphoneURL,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },
  {
    src: window.avocado,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },
  {
    src: window.death,
    album: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta eaque consequatur vel voluptatum?',
    artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae iste perferendis molestiae quae.',
    sold: null,
    country: null
  },


]

export default MainPage;



// window.cartoonURL 
// window.bandURL 
// window.microphoneURL 
// window.avocado 
// window.death 