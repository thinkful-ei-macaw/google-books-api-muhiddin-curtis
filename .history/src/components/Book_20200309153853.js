import React from 'react';

export default function Book(props) {
  
  return(
      <div className="bookItem">
        <h2 className="title"> Title: {props.volumeInfo.title}</h2>
        {(props.volumeInfo.authors) ? <p className="author"> Author: {props.volumeInfo.authors}</p> : <p>no author</p>}
       {(props.saleInfo.listPrice.amount) ? <p className="price">Price: ${props.saleInfo.listPrice.amount}</p> :  <p>free</p>}
        <div className="description"> Description: {props.volumeInfo.description}</div><hr />
      </div>
    )
  }


