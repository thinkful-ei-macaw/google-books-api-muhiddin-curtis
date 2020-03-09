import React from 'react';

export default class Book extends Component {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.book.volumeInfo.title}</h2>
        <p className="author">Author: {props.book.volumeInfo.authors}</p>
        <p className="price">Price: {props.book.saleInfo.listPrice}</p>
        <div className="description">Description: {props.book.volumeInfo.description}</div><hr />
      </div>
    )
  }


