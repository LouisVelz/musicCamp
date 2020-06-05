import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class LoggedMenuBar extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    let heart = <FontAwesomeIcon icon={faHeart} size='2x' />
    let bolt = <FontAwesomeIcon icon={faBolt} size='2x' />
    let search = <FontAwesomeIcon icon={faSearch} size='1x' />

    return(
      <div className='logged-menu-bar'>
        <ul>
          <li className='rhomboid'></li>
          <li>musiccamp</li>
          <li>
            <input type="text" placeholder='Search and discover music' />
            {search}
          </li>
        </ul>
        <ul>
          <li>{bolt}</li>
          <li>{heart}</li>
          <li><div className='circle'></div></li>
          <li><button onClick={() => this.props.logout()}>Log Out</button></li>
        </ul>
      </div>
    )
  }
}

export default LoggedMenuBar;