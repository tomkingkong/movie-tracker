import React, {Component} from 'react';
import {connect} from 'react-redux';

// import './UserInputForm.css';
import { userLogIn, fetchUserFavorites } from '../../Utilities/fetchApi';
import { loginUser, updateFavorites, alertUser } from '../../actions';
import { Link, withRouter } from 'react-router-dom';
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
      <div>
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
          <Link to='/signup' onClick={() => alertUser('')}>
            <input 
              value='Sign Up'
              type='button'
            />
          </Link>
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
