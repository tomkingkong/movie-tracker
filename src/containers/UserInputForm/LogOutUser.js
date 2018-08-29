import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';

export const LogOutUser = (props) => {
  const { logout } = props;
  return (
    <Link to="/">
      <button onClick={logout}>Log Out</button>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(LogOutUser)