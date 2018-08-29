import React, { Component } from 'react';
import { connect } from 'react-redux';

import { discoverMovies } from '../../Utilities/fetchApi';
import { displayHanksMovies } from '../../actions';
import ContentRoute from '../../containers/ContentRoute';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const { displayHanksMovies } = this.props
    const hanksMovies = await discoverMovies();
    displayHanksMovies(hanksMovies);
  }

  render() {
    return (
      <div className="App">
        <ContentRoute />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  displayHanksMovies: (movies) => dispatch(displayHanksMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
