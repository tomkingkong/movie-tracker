import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addHanksMovies } from '../../actions';
import ContentRoute from '../../containers/ContentRoute/';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ContentRoute />
      </div>
    );
  }
}

export default App;
