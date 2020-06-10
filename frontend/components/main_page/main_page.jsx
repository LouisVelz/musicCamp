import React from 'react'
import {Link} from 'react-router-dom'



class MainPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

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
            <li><img src={window.list1} />
            <br/>
              <p><strong>Music Album</strong></p>
                <br/>
                <p>By a Music Artist</p>
                <br/>
                <p>sold for $5</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list2} />
            <br/>
                <strong>Some Music Album</strong>
                <br/>
                <p>sold for $6</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list3} />
            <br/>
                <strong>Another Music Album</strong>
                <br/>
                <p>sold for $7</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list4} />
            <br/>
                <strong>Yet Another One</strong>
                <br/>
                <p>sold for $12</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list5} />
            <br/>
                <strong>More Albums</strong>
                <br/>
                <p>sold for $14</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list6} />
            <br/>
                <strong>Album 22</strong>
                <br/>
                <p>sold for $17</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list7} />
            <br/>
                <strong>Album</strong>
                <br/>
                <p>sold for $13</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>
            <li><img src={window.list8} />
            <br/>
                <strong>Music</strong>
                <br/>
                <p>sold for $18</p>
                <br/>
                <p>In 🇺🇸 United states</p>
            </li>

            </ul>
          </div>

      </div>
    )
  }
}

export default MainPage;

// window.monkeyURL
// window.musicianURL 
// window.cartoonURL
// window.girl2URL
// window.bandURL 
// window.microphoneURL 
// window.guitarURL 
// window.guitar2URL 

// window.list1 
// window.list2 
// window.list3 
// window.list4 
// window.list5 
// window.list6 
// window.list7 
// window.list8 
// window.avocado 