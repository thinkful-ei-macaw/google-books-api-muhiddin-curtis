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
      searchTerm: '',
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
    const searchTerm = this.props.search.value;
    this.setState({
      searchTerm: searchTerm
    })
    }


componentDidMount() {
  console.log(this.state.searchTerm);
  const url = `https://www.googleapis.com/books/v1/volumes?q={${this.state.searchTerm}}`;
    fetch(url)
    .then(response => {
      console.log(url);
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
}

  render() {
    return (
      <div className="App">
        <Header />
        <Search onSubmit={this.onSubmit}/>
        <Filter />
        <BookList books={this.state.books.items}/>
      </div>
    );
  }
}

export default App;




