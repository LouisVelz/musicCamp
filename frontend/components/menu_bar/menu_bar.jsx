import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faBolt} from '@fortawesome/free-solid-svg-icons'
import { openModal } from '../../actions/modal_actions';

class MenuBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let heart = <FontAwesomeIcon icon={faHeart} size= '2x'/>
    let bolt = <FontAwesomeIcon icon={faBolt} size='2x'/>
    let search = <FontAwesomeIcon icon={faSearch} size='1x'/>

    const { currentUser } = this.props

    let list
    if (currentUser){
      list = <ul>
        <li>{bolt}</li>
        <li>{heart}</li>
        <li><div className='circle'></div></li>
        <li><button onClick={() => this.props.logout()}>Log Out</button></li>
      </ul>

    }else {
      list = <ul>
        {/* <Link to='/signup' onClick={()=> openModal()}>sign up</Link> */}
        <button onClick={() => this.props.openModal()}>sing up</button>
        <Link to='/login'><button>log in</button></Link>
      </ul>
    }

    return(
      <div className='menu-bar'>
        <ul>
          <li className='rhomboid'></li>
          <li>musiccamp</li>
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
