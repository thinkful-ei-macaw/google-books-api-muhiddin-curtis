import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.volumeInfo}</h2>
        <p className="author">Author: {props.volumeInfo}</p>
        <p className="price">Price: {props}</p>
        <div className="description">Description: {props.volumeInfo}</div><hr />
      </div>
    )
  }


