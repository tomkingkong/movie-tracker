import { API_KEY } from '../key';
import { cleanMovieData } from './Cleaner';

export const fetchCurry = (originUrl) => (end3='') => (end2='') => (end1='') => (method='') => async (body={}) => {
  const response = await fetch(`${originUrl}${end3}${end2}${end1}`, { 
    method, 
    body: JSON.stringify(body), 
    headers: {'Content-Type': 'application/json'} 
  })
  const initialFetch = await response.json();
  return initialFetch
}

const database = 'http://localhost:3000/api/users/';
const imdb = 'https://api.themoviedb.org/3/person/31/movie_credits?api_key=';

export const addFavoriteFetch = (movie) => fetchCurry(database)('')('favorites')('/new')('POST')(movie);
export const removeFavoriteFetch = (userId, movieId) => fetchCurry(database)(userId)('/favorites/')(movieId)('DELETE')({user_id:userId, movie_id:movieId});
export const fetchFavorites = (userId) => fetchCurry(database)(userId)('/favorites');
export const signUpUserFetch = (user) => fetchCurry(database)('')('')('new')('POST')(user);
export const logInUserFetch = (user) => fetchCurry(database)('')('')('')('POST')(user);

export const fetchHanksMovies = () => fetchCurry(imdb)(API_KEY)('&language=en-US');



export const discoverMovies = async () => {
  const url = `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const hanksCredits = await response.json();
  const hanksMovieData = hanksCredits.cast.map( credit => { 
    return cleanMovieData(credit);
  })
  if (response.ok) {
    return hanksMovieData;
  } else {
    return {
      alert: 'Something is wrong with your connection.'
    }
  }
}

export const fetchUserFavorites = async (userId) => {
  try {
    const url = `http://localhost:3000/api/users/${userId}/favorites`;
    const response = await fetch(url);
    const userFavorites = await response.json();
    return userFavorites;
  } catch(error) {
    return {alert: 'Add to your favorites by selecting movies you like.'}
  }
}

export const addUserFavorite = (userId, movie) =>{
  const url = 'http://localhost:3000/api/users/favorites/new';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      ...movie
    }),
    headers: {'Content-Type': 'application/json'} 
  });
};

export const removeUserFavorite = async (userId, movieId) =>{
  const url = `http://localhost:3000/api/users/${userId}/favorites/${movieId}`;

  const response = await fetch(url, {
    method: 'DELETE'
  });

  if (response.ok) {
    return await response.json();
  } else {
    return {alert: 'We were unable to remove your favorite at this time.'}
  }
}

export const userSignUp =  async (user) => {
  const url = "http://localhost:3000/api/users/new";
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    return await response.json()
  } else {
    return {alert: 'Email has already been taken.'}
  }
}

export const userLogIn = async (user) => {
  try {
    const url = "http://localhost:3000/api/users";
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const login = await response.json();
    return login;
  } catch (error) {
    return {
      ...error, 
      alert: 'Email and Password do not match.'
    };
  }
}



