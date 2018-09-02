import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Home = () => {
  return (
    <div className="NavBar">
      <NavLink className="NavLink" to='/login'>Log In</NavLink>
      <NavLink className="NavLink" to='/signup'>Sign Up</NavLink>
    </div>
  )
}