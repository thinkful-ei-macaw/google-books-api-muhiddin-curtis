import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.books.items.volumeInfo.title}</h2>
        <p className="author">Author: {props.books.items.volumeInfo.authors}</p>
        <p className="price">Price: {props.books.items.saleInfo.listPrice}</p>
        <div className="description">Description: {props.books.items.volumeInfo.description}</div><hr />
      </div>
    )
  }


