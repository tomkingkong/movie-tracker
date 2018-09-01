import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { discoverMovies } from '../../Utilities/fetchApi';
import { displayHanksMovies } from '../../actions';
import MoviesContainer from '../../components/MoviesContainer/';

export class ContentRoute extends Component {
  
  async componentDidMount() {
    const { displayHanksMovies } = this.props;
    const hanksMovies = await discoverMovies();
    displayHanksMovies(hanksMovies);
  }

  render() {
    const { movies, favorites } = this.props;
    return (
      <Switch>
        <Route exact path='/favorites' render={({history}) => (<MoviesContainer movies={favorites} history={history}/>)} />
        <Route path='/' render={({history}) => (<MoviesContainer movies={movies} history={history}/>)} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ movies, favorites }) => ({
  movies,
  favorites
})

const mapDispatchToProps = (dispatch) => ({
  displayHanksMovies: (movies) => dispatch(displayHanksMovies(movies))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentRoute));