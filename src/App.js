import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import DisplayCards from './components/DisplayCards'
import { Provider } from 'react-redux'
import Store from './redux/Store'

class App extends Component {
  render() {
    return (

      <Provider store = {Store}>
        <div className="App">
          <SearchBar/>
          <DisplayCards/>

        </div>
      </Provider>
    );
  }
}

export default App;
