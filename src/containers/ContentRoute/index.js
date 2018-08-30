import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { discoverMovies } from '../../Utilities/fetchApi';
import { displayHanksMovies } from '../../actions';
import { MoviesContainer } from '../../components/MoviesContainer/';

export class ContentRoute extends Component {
  
  async componentDidMount() {
    const { displayHanksMovies } = this.props;
    const hanksMovies = await discoverMovies();
    displayHanksMovies(hanksMovies);
  }

  render() {
    const { movies } = this.props;
    return (
      <Route exact path='/' render={({history}) => (<MoviesContainer movies={movies} history={history}/>)} />
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  displayHanksMovies: (movies) => dispatch(displayHanksMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentRoute);