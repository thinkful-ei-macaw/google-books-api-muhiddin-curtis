import React, {Component} from 'react';
import Book from './Book';

export default function BookList(props) {

  BookList.defaultProps = {
    title: 'Henry I',
    author: 'C.Warren Hollister',
    price: '$50.00',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s\
        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
 
    return (
      <div className="bookList">
        <Book title={props.title}/>
      </div>
    )
}

