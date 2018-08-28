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

export const addUserFavorite = (user, id) =>{

}

export const deleteUserFavorite = (user, id) =>{

}

export const addNewUser = (user) => {

}

export const userSignIn = (user) => {

}



