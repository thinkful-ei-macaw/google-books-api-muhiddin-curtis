import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from './components/Filter';
import BookList from './components/BookList';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Search />
      <Filter />
      <BookList/>

      </div>
    );
  }
}

export default App;
