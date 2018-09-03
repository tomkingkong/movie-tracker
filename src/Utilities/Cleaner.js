import PropTypes from 'prop-types';

export const cleanMovieData = (fetchedMovie) => {
  const cleanMovie = {
    title: fetchedMovie.title,
    vote_average: fetchedMovie.vote_average,
    poster_path: `https://image.tmdb.org/t/p/w500${fetchedMovie.poster_path}`,
    movie_id: fetchedMovie.id,
    overview: fetchedMovie.overview,
    release_date: fetchedMovie.release_date
  };
  return cleanMovie;
};

const { string, number, shape } = PropTypes;
cleanMovieData.propTypes = {
  fetchedMovie: shape({
    title: string,
    vote_average: string,
    poster_path: string,
    id: number,
    overview: string,
    release_date: string
  })
};