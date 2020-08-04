import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngellist } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component{

  render(){
    return (
      <div className="footer-main">
        <div className="upper">
          <ul>
            {/* <li>About Us</li>
              <li>Fair Trade Music Policy</li>
              <li>Jobs</li>
              <li><p>Apps:</p> Android | IOS</li>
              <li>Buttons / Logos</li> */}
            <li>
              <a href="https://angel.co/u/louis-velazquez">
                <FontAwesomeIcon icon={faAngellist} size="1x" />
              </a>
            </li>
          </ul>

          <ul>
            {/* <li>Musiccamp Daily</li>
            <li>Facebook</li>
            <li>Twitter | Status</li>
            <li>Instagram</li>
            <li>Connect/Help</li> */}
            <li>
              <a href="https://angel.co/u/louis-velazquez">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://angel.co/u/louis-velazquez">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </li>
            {/* <li>Musiccamp for Artists</li>
            <li>Musiccamp for Fans</li>
            <li>Musiccamp for Labels</li>
            <li>Mobile view</li> */}
          </ul>
        </div>
        {/* <div className="lower">
          <ul>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Copyrigth Policy</li>
            <li>
              <a href="https://angel.co/u/louis-velazquez">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </li>
          </ul>
          <ul>
            <li></li>
          </ul>
          <ul>
            <li className="english-link">
              <p>Language: </p>English
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Footer;