import React, {Component} from 'react';

export default class Book(props) {
 
  render() {
    return (
      <div className="bookItem">
        <h2 className="title">Title</h2>
        <p className="author">Author: C.Warren Hollister</p>
        <p className="price">Price: $50.00</p>
        <div className="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
         </div>
      </div>
    )
  }
}

export default Book;