import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Search />
      </div>
    );
  }
}

export default App;
