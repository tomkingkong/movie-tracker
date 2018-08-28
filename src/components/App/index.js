import React, { Component } from 'react';
import { connect } from 'react-redux';

import { discoverMovies } from '../../Utilities/fetchApi';
import { addHanksMovies } from '../../actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const hanksMovies = await discoverMovies();
    this.props.addHanksMovies(hanksMovies);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
