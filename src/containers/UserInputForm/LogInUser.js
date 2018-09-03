import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Navigation.css';
import { fetchFavorites, logInUserFetch } from '../../Utilities/fetchApi';
import { loginUser, updateFavorites, alertUser } from '../../actions';
import Alert from '../Alert';
 
export class LogInUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name] : value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { login, history, updateFavorites, alertUser } = this.props;
    const userInfo = await logInUserFetch(this.state);
    if (!userInfo) {
      return alertUser('Email and/or Password do not match.');
    }
    const userFavorites = await fetchFavorites(userInfo.data.id);
    updateFavorites(userFavorites);
    login(userInfo.data);
    history.push('/user');
  }

  render() {
    const { email, password } = this.state;
    const { alertUser } = this.props;
    return (
      <div className="NavBar">
        <form onSubmit={this.handleSubmit}>
          <input 
            required
            type='email'
            placeholder='Email'
            value={email}
            name='email'
            className='login-input'
            onChange={this.handleChange}
          />
          <input
            required
            placeholder='Password'
            value={password}
            name='password'
            className='login-input'
            onChange={this.handleChange}
          />
          <button className="login-button">Login</button>
          <NavLink className="NavLink" to='/signup' onClick={() => alertUser('')}>
            Sign Up
          </NavLink>
        </form>
        <Alert />
      </div>
    );
  }
}

const { func } = PropTypes;
LogInUser.propTypes = {
  login: func,
  updateFavorites: func,
  alertUser: func
};

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  updateFavorites: (movies) => dispatch(updateFavorites(movies)),
  alertUser: (message) => dispatch(alertUser(message))
});

export default withRouter(connect(null, mapDispatchToProps)(LogInUser));
