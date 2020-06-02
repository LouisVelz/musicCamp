import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faBolt} from '@fortawesome/free-solid-svg-icons'

class MenuBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let heart = <FontAwesomeIcon icon={faHeart} />
    let bolt = <FontAwesomeIcon icon={faBolt} />
    let search = <FontAwesomeIcon icon={faSearch} />

    const { currentUser } = this.props

    let list
    if (currentUser){
      list = <ul>
        <li>{heart}</li>
        <li>{bolt}</li>
        <li><div className='circle'></div></li>
        <li><button onClick={() => this.props.logout()}>Log Out</button></li>
      </ul>

    }else {
      list = <ul>
        <Link to='/signup'>sign up</Link>
        <Link to= '/login'>log in</Link>
      </ul>
    }

    return(
      <div className='menu-bar'>
        <ul>
          <li>bandcamp</li>
          <li>
            <input type="text" placeholder='Search and discover music'/>
            {search}
          </li>
        </ul>
        {list}
      </div>
    )
  }

}

export default MenuBar;
