import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h2 className="title">{props.title}</h2>
        <p className="author">Author: {props.authors}</p>
        <p className="price">Price: {props.price}</p>
        <div className="description">{props.description}</div><hr />
      </div>
    )
  }


