import React, { Component } from 'react';
import { connect } from 'react-redux';

import { discoverMovies } from '../../Utilities/fetchApi';
import { addHanksMovies } from '../../actions';
import ContentRoute from '../../containers/ContentRoute';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const hanksMovies = await discoverMovies();
    this.props.addHanksMovies(hanksMovies);
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
  addHanksMovies: (movies) => dispatch(addHanksMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
