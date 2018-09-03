import { API_KEY } from '../key';
import { cleanMovieData } from './Cleaner';

export const fetchCurry = (originUrl) => (...paths) => (method='') => async (body={}, options) => {  
  const url = originUrl + paths.join('');
  const dataPayload =  options || { method, body: JSON.stringify(body), headers: {'Content-Type': 'application/json'} };
  try {
    const response = await fetch(url, dataPayload);
    const status = await response.json();
    return status;
  } catch (error) {
    return false;
  }
};

const users = 'http://localhost:3000/api/users/';

export const removeFavoriteFetch = (user_id, movie_id) => fetchCurry(users)(user_id, '/favorites/', movie_id)('DELETE')({user_id, movie_id});
export const addFavoriteFetch = (movie) => fetchCurry(users)('favorites', '/new')('POST')(movie);
export const fetchFavorites = (userId) => fetchCurry(users)(userId, '/favorites')()();
export const signUpUserFetch = (user) => fetchCurry(users)('new')('POST')(user);
export const logInUserFetch = (user) => fetchCurry(users)()('POST')(user);

export const fetchHanksMovies = async () => {
  const imdb = 'https://api.themoviedb.org/3/person/31/movie_credits?api_key=';
  const hanksCredits = await fetchCurry(imdb)(API_KEY, '&language=en-US')()({}, {});
  if (!hanksCredits) return;
  const hanksMovies = hanksCredits.cast.map(credit => (cleanMovieData(credit)));
  return hanksMovies;
};