import React, {Component} from 'react'


class Search extends Component {
  render() {
    return (
      <form className="searchForm" >
        <label htmlFor="search">Search</label>
        <input type="text" name="search" />
        <input type="submit" />
      </form>
    )
  }
}

export default Search;