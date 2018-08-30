import React, {Component} from 'react';
import {connect} from 'react-redux';

// import './UserInputForm.css';
import { userLogIn } from '../../Utilities/fetchApi';
import { loginUser } from '../../actions';
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

  handleSubmit = (e) => {
    const { login, history } = this.props;
    userLogIn(this.state);
    login(this.state);
    history.push('/user');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='email'
          placeholder='Email'
          value={email}
          name='email'
          onChange={this.handleChange}
        />
        <input 
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
  login: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);