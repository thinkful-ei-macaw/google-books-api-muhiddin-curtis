import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">Title: {props.volumeInfo.title}</h2>
        <p className="author">Author: {props.volumeauthor}</p>
        <p className="price">Price: {props.price}</p>
        <div className="description">Description: {props.description}</div><hr />
      </div>
    )
  }


