import React from 'react';

import Card from '../Card';
import './MoviesContainer.css';

export const MoviesContainer = ({movies}) => {
  debugger
  if (!movies) return (<section></section>)
  const displayMovieCards = movies.map((movie, i) => {
    return (<Card {...movie} key={movie.title+i} />)
  })
  return (
    <section className="MoviesContainer">
      {displayMovieCards}
    </section>
  )
}
