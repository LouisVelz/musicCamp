import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

class MenuBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    let search = <FontAwesomeIcon icon={faSearch} size='1x'/>

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
        <ul>
          <li>
            <button onClick={() => this.props.openModal()}>sing up</button>
          </li>
          <li>
            <Link to='/login'><button>log in</button></Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;
