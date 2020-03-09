import React from 'react';
import Book from './Book';

export default function BookList(props) {

    return (
      <div className="bookList">
        {this.props.books.items.map(book => 
            <Book {props.title = book.title props.author = book.authors}/>        
        )}
        <Book title='Henry' author='some author' price='$50.00' description='Description goes here'/>
      </div>
    )
}


/**
 * 
 */