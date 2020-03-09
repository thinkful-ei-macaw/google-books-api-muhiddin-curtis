import React, {Component} from 'react';
import Book from './Book';

export default function BookList(props) {

    return (
      <div className="bookList">
        <Book title={'Henry'} author={'some author'} price{'$50.00'/>
      </div>
    )
}

