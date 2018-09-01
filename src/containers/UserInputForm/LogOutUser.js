import React from 'react';
import { connect } from 'react-redux';
import { logoutUser, displayFavorites, displayHanksMovies } from '../../actions';
import { Link } from 'react-router-dom';

export const LogOutUser = (props) => {
  const { logout, displayFavorites, favorites, movies } = props;
  return (
    <div>
      <Link to="/" replace>
        <button onClick={logout}>Log Out</button>
      </Link>
      <Link to="/favorites">
        <button onClick={() => displayFavorites(favorites)}>Display Favorites</button>
      </Link>
      <Link to="/user">
        <button onClick={() => displayHanksMovies(movies)}>Discover Movies</button>
      </Link>
    </div>
  )
}

const mapStateToProps = ({favorites, movies}) => ({
  favorites,
  movies
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()), 
  displayFavorites: (movies) => dispatch(displayFavorites(movies)),
  displayHanksMovies: (movies) => dispatch(displayHanksMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOutUser)