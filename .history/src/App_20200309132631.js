import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from './components/Filter';
import BookList from './components/BookList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: this.onSubmit,
      books: {
         items: []
      }
     
    }
    // this.setState({
    //   searchTerm: 
    // })
  }

    onSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    return searchTerm;
  }



    fetch(`https://www.googleapis.com/books/v1/volumes?q={${this.searchTerm}}`)
    .then(response => {
      if(!response.ok) {
        throw new Error ('Something went wrong');
      }
        return response;
    })
  .then(response=> response.json())
  .then(data => {
    console.log(data);
    this.setState({
      books: data
    })
  })
  .catch(error => {
    this.setState({
      error: error.message
  });
});


  render() {
    return (
      <div className="App">
        <Header />
        <Search onSubmit={this.onSubmit}/>
        <Filter />
        <BookList books={this.props.books.items}/>
      </div>
    );
  }
}

export default App;




