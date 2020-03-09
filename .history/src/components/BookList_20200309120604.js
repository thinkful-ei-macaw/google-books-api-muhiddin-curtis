import React, {Component} from 'react';
import Book from './Book';

export default function BookList(props) {
  constructor(props) {
    super(props)
    this.state = {
    title: 'sdsf',
    author: 'C.Warren Hollister',
    price: '$50.00',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s\
        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
   }
 
  }
    return (
      <div className="bookList">
        <Book title={this.props.title} author={this.props.author}/>
      </div>
    )
}

