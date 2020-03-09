import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from './components/Filter';
import BookList from './components/BookList';


class App extends Component {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Search onSubmit={this.props.onSubmit}/>
      <Filter />
      <BookList/>

      </div>
    );
  }
}

export default App;




/**

constructor(props) {
    super(props);
    this.state = {
      
    };
  }

onSubmitForm = (event) => {
  event.preventDefault();
  console.log(event.target.search.value);
}

 componentDidMount() {
    fetch()
      .then(response => {
        if(!response.ok) {
          throw new Error ('Something went wrong')
          }
        }
        return response;
      })
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
}

 */