import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '../Card';
import './MoviesContainer.css';

export const MoviesContainer = ({ movies, history }) => {
  if (!movies) return (<section></section>)
  const displayMovieCards = movies.map((movie, i) => {
    return (
      <Card 
        movie={movie}
        history={history} 
        key={movie.title+i} 
      />
    )
  })
  return (
    <section className="MoviesContainer">
      {displayMovieCards}
    </section>
  )
}

const { array, object } = PropTypes;
MoviesContainer.propTypes = {
  movies: array,
  history: object
}

export default withRouter(MoviesContainer);