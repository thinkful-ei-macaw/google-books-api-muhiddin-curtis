import React, {Component} from 'react';

export default function Book(props) {

  Book.defaultProps = {
    title: 'Henry I',
    author: 'C.Warren Hollister',
    price: '$50.00',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s\
        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
 
    return (
      <div className="bookItem">
        <h2 className="title">{props.title}</h2>
        <p className="author">Author: {props.author}</p>
        <p className="price">Price: {props.price}</p>
        <div className="description">{props.description}
         </div>
      </div>
    )
  }


