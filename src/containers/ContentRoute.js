import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { MoviesContainer } from '../components/MoviesContainer';

class ContentRoute extends Component {

  render() {
    const { movies } = this.props;
    return (
      <Route exact path='/' render={() => (<MoviesContainer movies={movies}/>)} />
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(ContentRoute);