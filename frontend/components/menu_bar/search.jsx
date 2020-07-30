import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Search extends React.Component(){
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
  }

  handleInputChange = e => {
    const query = e.target.value;
    this.setState({query, loading: true, message: ''});
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
      </label>
    )
  }
}

export default Search