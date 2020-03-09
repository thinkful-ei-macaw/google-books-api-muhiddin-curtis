import React from 'react';
import Book from './Book';

export default function BookList(props) {

    return (
      <div className="bookList">
        {props.books.forEach(book => 
            <Book title = {book.title}/>        
        )}
        <Book title='Henry' author='some author' price='$50.00' description='Description goes here'/>
      </div>
    )
}


/**
 * 
 */