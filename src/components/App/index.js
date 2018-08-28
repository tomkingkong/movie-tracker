import React, { Component } from 'react';
import './App.css';
import {discoverMovies} from '../../Utilities/fetchApi';

class App extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const hanksMovies = await discoverMovies();
    console.log(hanksMovies);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
