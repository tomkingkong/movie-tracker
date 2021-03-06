import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.css';
import { signUpUserFetch } from '../../Utilities/fetchApi';
import { loginUser, alertUser } from '../../actions';
import Alert from '../../containers/Alert';
 
export class SignUpUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { login, history, alertUser } = this.props;
    const userInfo = await signUpUserFetch(this.state);
    if (!userInfo) {
      return alertUser('Email has already been taken.');
    }
    const newUser = {...this.state, id: userInfo.id};
    login(newUser);
    history.push('/user');
  }

  render() {
    const { email, password, name } = this.state;
    const { alertUser } = this.props;
    return (
      <div className="signup-wrapper">
        <div className="signup-cont">
          <h4>Sign Up to save your favorite Hanks movies!</h4>
          <form 
            className="signup-form"
            onSubmit={this.handleSubmit}
          >
            <input
              className='login-name'
              required
              placeholder='User Name'
              value={name}
              name='name'
              onChange={this.handleChange}
            />
            <input
              className='login-email'
              required
              type='email'
              placeholder='Email'
              value={email}
              name='email'
              onChange={this.handleChange}
            />
            <input
              className='login-password'
              required
              placeholder='Password'
              value={password}
              name='password'
              onChange={this.handleChange}
            />
            <button>Sign Up</button>
          </form>
          <Alert />
          <NavLink className="NavLink" to='/login' onClick={() => alertUser('')}>
            If you already have an account, Log In here!
          </NavLink>
        </div>
      </div>
    );
  }
}

const { func } = PropTypes;
SignUpUser.propTypes = {
  login: func,
  alertUser: func
};

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  alertUser: (message) => dispatch(alertUser(message))
});

export default connect(null, mapDispatchToProps)(SignUpUser);