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
    // this.handleInputChange = this.handleClick.bind(this)
  }

  handleInputChange (e) {
    const query = e.target.value;
    this.setState({query, loading: true, message: ''});
    fetchSearches(query).then(
      results => {
        this.setState({results})
      }
    )
  }

  // handleClick (e){
  //   debugger
  //   setTimeout(() => this.setState({ query: '' }),100)
  // }

  render(){
    let search = <FontAwesomeIcon icon={faSearch} size='1x' />
    const {query} = this.state
    return(
      <div className='search-bar'>
      <label className='search-input'>
        <input
          type="text"
          value={query}
          id='search-input'
          placeholder='    Search and discover music'
          onChange={this.handleInputChange}
         />
      </label>
        <button>{search}</button>
        <div className='search-results-list'>
 
          {this.state.results.length === 0 ? null :
          <ul>
          {this.state.results.map((result, index) => {
              return (
                <li key={index} >
                  <Link to={`/${result.type}/${result.id}`}>
                    <div className="result-content">
                      <img src={result.photo} height='50' width='50'/>
                      <div>
                        <p>{result.title}</p>
                        <p>{result.label}</p>
                      </div>
                    </div>
                  </Link>
                </li>              
              )
          })}
          </ul>
          }

        </div>
      </div>
    )
  }
}

export default Search