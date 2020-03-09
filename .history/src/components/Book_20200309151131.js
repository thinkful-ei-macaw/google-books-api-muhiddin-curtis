import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.volumeInfo.title}</h2>
        <p className="author">Author: {props.volumeInfo.authors}</p>
        <p className="price">Price: {props.saleInfo.listPrice.amount}</p>
        <div className="description">Description: {props.volumeInfo.description}</div><hr />
      </div>
    )
  }


