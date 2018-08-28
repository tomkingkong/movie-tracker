import React from 'react';

import Card from '../Card';
import './Container.css';

export const MoviesContainer = ({movies}) => {
  if (!movies) return (<section></section>)
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