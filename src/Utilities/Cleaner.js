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
}