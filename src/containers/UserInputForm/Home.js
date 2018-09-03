import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Home = () => {
  return (
    <div className="NavBar">
      <NavLink className="main-link" to='/login'>Login</NavLink>
      <NavLink className="main-link signup" to='/signup'>Sign Up</NavLink>
    </div>
  )
}