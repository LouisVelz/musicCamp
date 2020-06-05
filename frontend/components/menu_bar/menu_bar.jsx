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
        <ul className='menu-bar-top'>
          <li><div className='rhomboid'></div>musiccamp</li>

          <li>
            <input type="text" placeholder='    Search and discover music'/>
            <button>{search}</button>
          </li>
        </ul>

        <ul className="menu-bar-bottom">
          <li>Discover amazing new music and <Link to='/'>directly support</Link> the artists who make it.</li>
          <li>
            <button onClick={() => this.props.openModal()}>sing up</button>
            <Link to='/login'><button>log in</button></Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;
