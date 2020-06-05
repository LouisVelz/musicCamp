import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component{

  render(){
    return(
      <div className='footer-main'>
        <div className="upper">

            <ul>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/'>Fair Trade Music Policy</Link></li>
              <li><Link to='/'>Jobs</Link></li>
              <li><p>Apps: <Link to='/'>Android</Link> | <Link to='/'>IOS</Link></p></li>
              <li><Link to='/'>Buttons / Logos</Link></li>
            </ul>

            <ul>
              <li><Link to='/'>Musiccamp Daily</Link></li>
              <li><Link to='/'>Facebook</Link></li>
              <li><p><Link to='/'>Twitter</Link> | <Link to='/'>Status</Link></p></li>
              <li><Link to='/'>Instagram</Link></li>
              <li><Link to='/'>Connect/Help</Link></li>
            </ul>

            <ul>
              <li><Link to='/login'>Log in</Link></li>
              <li><Link to='/'>Musiccamp for Artists</Link></li>
              <li><Link to='/'>Musiccamp for Fans</Link></li>
              <li><Link to='/'>Musiccamp for Labels</Link></li>
              <li><Link to='/'>Mobile view</Link></li>
            </ul>

        </div>
        <div className="lower">
          {/* <div className='lower-left'> */}
            <ul>
              <li><Link to='/'>Terms of use</Link></li>
              <li><Link to='/'>Privacy</Link></li>
              <li><Link to='/'>Copyrigth Policy</Link></li>
           
            </ul>

            <ul>
              <li></li>
            </ul>

            <ul>
              <li className='english-link'><p>Language: <Link to='/'>English</Link></p></li>
            </ul>

        </div>
      </div>
    )
  }
}

export default Footer;