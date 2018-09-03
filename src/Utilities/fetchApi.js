import { API_KEY } from '../key';
import { cleanMovieData } from './Cleaner';

export const fetchCurry = (originUrl) => (end3='') => (end2='') => (end1='') => (method='') => async (body={}, options) => {  
  const url = `${originUrl}${end3}${end2}${end1}`;
  const payload =  options || { method, body: JSON.stringify(body), headers: {'Content-Type': 'application/json'} };
  try {
    const response = await fetch(url, payload)
    const status = await response.json();
    return status;
  } catch (error) {
    return false;
  }
}

const database = 'http://localhost:3000/api/users/';

export const removeFavoriteFetch = (userId, movieId) => fetchCurry(database)(userId)('/favorites/')(movieId)('DELETE')({user_id:userId, movie_id:movieId});
export const addFavoriteFetch = (movie) => fetchCurry(database)()('favorites')('/new')('POST')(movie);
export const fetchFavorites = (userId) => fetchCurry(database)()(userId)('/favorites')()();
export const signUpUserFetch = (user) => fetchCurry(database)()()('new')('POST')(user);
export const logInUserFetch = (user) => fetchCurry(database)()()()('POST')(user);

export const fetchHanksMovies = async () => {
  const imdb = 'https://api.themoviedb.org/3/person/31/movie_credits?api_key=';
  const hanksCredits = await fetchCurry(imdb)(API_KEY)('&language=en-US')()()({},{});
  if (!hanksCredits) return;
  const hanksMovies = hanksCredits.cast.map(credit => (cleanMovieData(credit)));
  return hanksMovies;
};