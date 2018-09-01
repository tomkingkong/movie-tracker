import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';
import { logoutUser, displayFavorites, displayHanksMovies } from '../../actions';

export const UserNav = (props) => {
  const { logout, displayFavorites, favorites, movies } = props;
  return (
    <div className="NavBar">
      <p className="tooltip" data-tooltip="Select your favorite Tom Hanks movies below!">?</p>
      <Link to="/favorites">
        <button onClick={() => displayFavorites(favorites)}>Favorites</button>
      </Link>
      <Link to="/user">
        <button onClick={() => displayHanksMovies(movies)}>Discover Hanks Movies</button>
      </Link>
      <Link to="/" replace>
        <button onClick={logout}>Log Out</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserNav)