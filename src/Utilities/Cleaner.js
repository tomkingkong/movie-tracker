export const cleanMovieData = (fetchedMovie) => {
  const cleanMovie = {
    title: fetchedMovie.title,
    rating: fetchedMovie.vote_average,
    image: `https://image.tmdb.org/t/p/w500${fetchedMovie.poster_path}`
  };
  return cleanMovie;
}