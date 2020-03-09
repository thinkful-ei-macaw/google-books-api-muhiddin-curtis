import React, {Component} from 'react';
import Book from './Book';

export default function BookList(props) {

    return (
      <div className="bookList">
        <Book title={'Henry'} author={this.props.author}/>
      </div>
    )
}

