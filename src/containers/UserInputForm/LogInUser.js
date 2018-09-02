import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import './Navigation.css';
import { userLogIn, fetchUserFavorites } from '../../Utilities/fetchApi';
import { loginUser, updateFavorites, alertUser } from '../../actions';
import Alert from '../Alert';
 
export class LoginUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
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
    const userInfo = await userLogIn(this.state);
    if (userInfo.alert) {
      return alertUser(userInfo.alert)
    }
    const userFavorites = await fetchUserFavorites(userInfo.data.id);
    updateFavorites(userFavorites.data);
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
            onChange={this.handleChange}
          />
          <input
            required
            placeholder='Password'
            value={password}
            name='password'
            onChange={this.handleChange}
          />
          <button>Login</button>
          <NavLink className="NavLink" to='/signup' onClick={() => alertUser('')}>
            Sign Up
          </NavLink>
        </form>
        <Alert />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  currentUser: state.user 
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  updateFavorites: (movies) => dispatch(updateFavorites(movies)),
  alertUser: (message) => dispatch(alertUser(message))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginUser));
