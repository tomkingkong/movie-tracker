import { API_KEY } from '../key';
import { cleanMovieData } from './Cleaner';

export const discoverMovies = async () => {
  const url = `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const hanksCredits = await response.json();
  const hanksMovieData = hanksCredits.cast.map(async credit => { 
    return cleanMovieData(credit);
  })
  return await Promise.all(hanksMovieData);
}

export const fetchUserFavorites = async (userId) => {
  try {
    const url = `http://localhost:3000/api/users/${userId}/favorites`;
    const response = await fetch(url);
    const userFavorites = await response.json();
    return userFavorites;
  } catch(error) {
    console.log(error)
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
  console.log(userId, movieId)
  const url = `http://localhost:3000/api/users/${userId}/favorites/${movieId}`;
  return await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({
      user_id: userId,
      movie_id: movieId
    }),
    headers: {'Content-Type': 'application/json'} 
  })
}

export const userSignUp =  async (user) => {
  try {
    const url = "http://localhost:3000/api/users/new";
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
      alert: 'Email has already been taken.'
    };
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



