import React from 'react';

import Card from '../Card';
import './MoviesContainer.css';

export const MoviesContainer = ({movies, history}) => {
  if (!movies) return (<section></section>)
  const displayMovieCards = movies.map((movie, i) => {
    return (<Card movie={movie} key={movie.title+i} history={history} />)
  })
  return (
    <section className="MoviesContainer">
      {displayMovieCards}
    </section>
  )
}
