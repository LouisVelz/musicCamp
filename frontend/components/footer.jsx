import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component{

  render(){
    return(
      <div className='footer-main'>
        <div className="upper">

            <ul>
              <li>About Us</li>
              <li>Fair Trade Music Policy</li>
              <li>Jobs</li>
              <li>Apps: Android | IOS</li>
              <li>Buttons / Logos</li>
            </ul>

            <ul>
              <li>Musiccamp Daily</li>
              <li>Facebook</li>
              <li>Twitter | Status</li>
              <li>Instagram</li>
              <li>Connect/Help</li>
            </ul>

            <ul>
              <li><Link to='/login'>Log in</Link></li>
              <li>Musiccamp for Artists</li>
              <li>Musiccamp for Fans</li>
              <li>Musiccamp for Labels</li>
              <li>Mobile view</li>
            </ul>

        </div>
        <div className="lower">
            <ul>
              <li>Terms of use</li>
              <li>Privacy</li>
              <li>Copyrigth Policy</li>
            </ul>
            <ul>
              <li></li>
            </ul>
            <ul>
            <li className='english-link'><p>Language: </p>English</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Footer;