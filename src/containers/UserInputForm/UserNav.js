import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { logoutUser, updateFavorites } from '../../actions';

export const UserNav = ({ user, clearFavorites, logout }) => {

  const handleLogOut = () => {
    clearFavorites([]);
    logout();
  }

  return (
    <div className="user-nav">
      <p className="tooltip" data-tooltip="Select your favorite Tom Hanks movies!">?</p>
      <h3>{user.name}</h3>
      <Link to="/favorites" className="favorites btn">
        Favorites ★
      </Link>
      <Link to="/user" className="discover btn">
        Discover Hanks Movies
      </Link>
      <Link to="/" replace>
        <button className="log-out" onClick={handleLogOut}>Log Out</button>
      </Link>
    </div>
  )
}

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  clearFavorites: (movies) => dispatch(updateFavorites(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNav)