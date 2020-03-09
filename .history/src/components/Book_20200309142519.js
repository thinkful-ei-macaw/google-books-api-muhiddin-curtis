import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.title}</h2>
        <p className="author">Author: {props.author}</p>
        <p className="price">Price: {props.price}</p>
        <div className="description">Description: {props.description}</div><hr />
      </div>
    )
  }


