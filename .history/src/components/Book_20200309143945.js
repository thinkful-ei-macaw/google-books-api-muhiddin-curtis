import React from 'react';

export default function Book(props) {
      return (
      <div className="bookItem">
        <h1 className="selfLink">Self link: {props.selfLink} </h1>
        {/* <h2 className="title">Title: {props.volumeInfo.title}</h2>
        <p className="author">Author: {props.volumeInfo.authors}</p>
        <p className="price">Price: {props.saleInfo.listPrice}</p>
        <div className="description">Description: {props.description}</div><hr /> */}
      </div>
    )
  }


