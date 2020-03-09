import React, {Component} from 'react'


export default function Search (props) {
  render() {
    return (
      <form className="searchForm" onSubmit={props.onSubmit}>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" />
        <input type="submit" />
      </form>
    )
  }
}

