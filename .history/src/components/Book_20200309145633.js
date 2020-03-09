import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.items.volumeInfo.title}</h2>
        <p className="author">Author: {props.items.volumeInfo.authors}</p>
        <p className="price">Price: {props.items.saleInfo.listPrice}</p>
        <div className="description">Description: {props.items.volumeInfo.description}</div><hr />
      </div>
    )
  }


