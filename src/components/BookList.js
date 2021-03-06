import React from 'react';
import Book from './Book';

export default function BookList(props) {

    return (
      <div className="bookList">
        {props.books.map((book, i) => 
            <Book {...book} key= {i}/>        
        )}
      </div>
    )
}


/**
 * 
 */