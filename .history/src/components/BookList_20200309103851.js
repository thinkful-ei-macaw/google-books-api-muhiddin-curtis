import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
 
  render() {
    return (
      <div className="bookList">
        <Book />
      </div>
    )
  }
}

export default BookList;