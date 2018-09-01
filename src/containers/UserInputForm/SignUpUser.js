import React, {Component} from 'react';
import {connect} from 'react-redux';
import { userSignUp } from '../../Utilities/fetchApi';
import Alert from '../../containers/Alert';
// import './UserInputForm.css';
import { loginUser, alertUser } from '../../actions';
import { Link } from 'react-router-dom';
 
export class SignUpUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { login, history } = this.props;
    const userInfo = await userSignUp(this.state);
    const newUser = {...this.state, id: userInfo.id}

    login(newUser);
    history.push('/user')
  }

  render() {
    const {email, password, name} = this.state;
    return (
      <div className="signup-cont">
        <form onSubmit={this.handleSubmit}>
          <input
            className='name-input'
            required
            placeholder='User Name'
            value={name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            className='email-input'
            required
            type='email'
            placeholder='Email'
            value={email}
            name='email'
            onChange={this.handleChange}
          />
          <input
            className='password-input'
            required
            placeholder='Password'
            value={password}
            name='password'
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
          <Link to='/'>
            <input
              value='Login'
              type='button'
            />
          </Link>
        </form>
        <Alert />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({ 
  currentUser: state.user 
})

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  alertUser: (message) => dispatch(alertUser(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUser);