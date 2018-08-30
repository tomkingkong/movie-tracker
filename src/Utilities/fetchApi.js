import {API_KEY} from '../key';
import {cleanMovieData} from './Cleaner';

export const discoverMovies = async () => {
  const url = `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`
  const response = await fetch(url);
  const hanksCredits = await response.json();
  const hanksMovieData = hanksCredits.cast.map(async credit => { 
    return cleanMovieData(credit);
  })
  return await Promise.all(hanksMovieData);
}

export const fetchUserFavorites = (user) => {

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

export const deleteUserFavorite = (user, id) =>{

}

export const userSignUp =  async (user) => {
  const url = "http://localhost:3000/api/users/new";

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const login = await response.json()
    return login
  } catch (error) {
    return 'Email has already been taken.'
  }
}

export const userLogIn = async (user) => {
  const url = "http://localhost:3000/api/users";

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const login = await response.json()
    return login
  } catch (error) {
    console.log(error);
    return 'Email and Password do not match.'
  }
}



