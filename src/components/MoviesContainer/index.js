import React from 'react';

import Card from '../Card';
import './Container.css';

export const MoviesContainer = (movies) => {
  const displayMovieCards = movies.map((movie, i) => {
    return (
      <Card {...movie} key={movie.title+i} />
    )
  })
  return (
    <section className="Container">
      {displayMovieCards}
    </section>
  )
}