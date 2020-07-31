import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {fetchSearches} from './../../util/searches_api_util'
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: [],
      loading: false,
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    debugger
    const query = e.target.value;
    this.setState({query, loading: true, message: ''});
    fetchSearches(query).then(
      results => {
        this.setState({results})
      }
    )
  }

  render(){
    let search = <FontAwesomeIcon icon={faSearch} size='1x' />
    const {query} = this.state
    return(
      <label className='search-input'>
        <input
          type="text"
          value={query}
          id='search-input'
          placeholder='    Search and discover music'
          onChange={this.handleInputChange}
         />
        <button>{search}</button>
        {/* {this.state.results.length === 0 ? null : this.state.results.map(result => {
          return <li><Link to ></Link></li>
        })} */}
      </label>
    )
  }
}

export default Search