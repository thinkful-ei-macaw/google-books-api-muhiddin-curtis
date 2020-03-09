import React from 'react';

export default function Book(props) {
  
  return(
      <div className="bookItem">
        <img src={props.volumeInfo.imageLinks.smallThumbnail} />
        <h2 className="title"> {props.volumeInfo.title}</h2>
        {(props.volumeInfo.authors) ? <p className="author"> <span className="bold">Author:</span> {props.volumeInfo.authors}</p> : <p>no author</p>}
       {(props.saleInfo.listPrice) ? <p className="price"> <span className="bold">Price: </span>${props.saleInfo.listPrice.amount}</p> :  <p>Free</p>}
        <div className="description"> Description: {props.volumeInfo.description}</div><hr />
      </div>
    )
  }


