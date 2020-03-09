import React, {Component} from 'react';
import Book from './Book';

export default class BookList(props) {
 
  render() {
    return (
      <div className="bookList">
        <Book />
      </div>
    )
  }
}

export default BookList;