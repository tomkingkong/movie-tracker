import React, {Component} from 'react';
import {connect} from 'react-redux';

// import './UserInputForm.css';
import { userLogIn, fetchUserFavorites } from '../../Utilities/fetchApi';
import { loginUser, updateFavorites } from '../../actions';
import { Link } from 'react-router-dom';
 
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
    const { login, history, updateFavorites } = this.props;
    const userInfo = await userLogIn(this.state);
    const userFavorites = await fetchUserFavorites(userInfo.data.id);
    updateFavorites(userFavorites.data);
    login(userInfo.data);
    history.push('/user');
  }

  render() {
    const { email, password } = this.state;
    return (
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
        <Link to='/signup'>
          <input 
            value='Sign Up'
            type='button'
          />
        </Link>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ 
  currentUser: state.user 
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  updateFavorites: (movies) => dispatch(updateFavorites(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
