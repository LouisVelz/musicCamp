import React from 'react'
import {Link} from 'react-router-dom'



class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {list: arrayOfitems}
    this.intervalId
  }

  componentDidMount(){
    this.intervalId = setInterval(()=>{
      arrayOfitems = arrayOfitems.slice(1).concat(arrayOfitems.slice(0,1))
      this.setState({list: arrayOfitems})
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render(){
    const { list } = this.state

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


    let menuBars 
    if (this.props.currentUser) {
      menuBars = <div className="logged-in"></div>
    } else {
      menuBars = <div className="not-logged-in"></div>
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
            <p>SELLING RIGHT NOW</p>
          </div>

          <div className="selling-now-list">
            <ul>
              {songList}
            </ul>
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

export default MainPage;
