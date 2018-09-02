export const discoverMovies = jest.fn().mockImplementation(() => ({
  title: "Forrest Gump",
  vote_average: 8.4,
  poster_path: "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
  movie_id: 13,
  overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
  release_date: "1994-07-06"
}));

export const fetchUserFavorites = jest.fn().mockImplementation(() => ({
  
}));

export const userSignUp = jest.fn().mockImplementation(() => ({
  id: 1,
  name: "Taylor",
  password: "password",
  email: "tman2272@aol.com"
}));