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
      searchTerm: ''
    }
    // this.setState({
    //   searchTerm: 
    // })
  }

    onSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    
  }


componentDidMount() {
    fetch(https://www.googleapis.com/books/v1/)
      .then(response => {
        if(!response.ok) {
          throw new Error ('Something went wrong')
          }
        }
        return response;
      )
  .then(response=> response.json())
  .then(data => {
    this.setState({

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
      <BookList/>

      </div>
    );
  }
}

export default App;




