import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { logoutUser } from '../../actions';

export const UserNav = (props) => {
  const { logout, user } = props;
  return (
    <div className="NavBar">
      <p className="tooltip" data-tooltip="Select your favorite Tom Hanks movies!">?</p>
      <h3>{user.name}</h3>
      <Link to="/favorites" className="favorites btn">
        Favorites ★
      </Link>
      <Link to="/user" className="discover btn">
        Discover Hanks Movies
      </Link>
      <Link to="/" replace>
        <button onClick={logout}>Log Out</button>
      </Link>
    </div>
  )
}

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNav)