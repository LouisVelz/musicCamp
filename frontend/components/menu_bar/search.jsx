import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchSearches } from "./../../util/searches_api_util";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      query: "",
      results: [],
      loading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleInputChange(e) {
    const query = e.target.value;
    this.setState({ query, loading: true });
    fetchSearches(query).then((results) => {
      this.setState({ results });
    });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  // componentWillUnmount() {
  //   // document.removeEventListener("mousedown", this.handleClickOutside);
  // }

  handleClickOutside(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      setTimeout(
        () =>
          this.setState({
            loading: false,
          }),
        500
      );
    }
  }

  render() {
    let search = <FontAwesomeIcon icon={faSearch} size="1x" />;
    const { query } = this.state;
    return (
      <div className="search-bar">
        <label className="search-input">
          <input
            ref={this.container}
            type="text"
            value={query}
            id="search-input"
            placeholder="    Search and discover music"
            onChange={this.handleInputChange}
          />
        </label>
        <button>{search}</button>
        <div className="search-results-list">
          {this.state.loading ? (
            <ul>
              {this.state.results.map((result, index) => {
                return (
                  <li key={index}>
                    <Link to={`/${result.type}/${result.id}`}>
                      <div className="result-content">
                        <img src={result.photo} height="50" width="50" />
                        <div>
                          <p>{result.title}</p>
                          <p>{result.label}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
