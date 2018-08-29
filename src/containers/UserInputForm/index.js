import React, {Component} from 'react';
import {connect} from 'react-redux';
// import './UserInputForm.css';

export class UserInputForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    });
  }

  render() {
    return (
      <form>
        <input 
          placeholder='User Name'
          value={this.state.email}
          name='email'
          onChange={this.handleChange}
        />
        <input 
          placeholder='Password'
          value={this.state.password}
          name='password'
          onChange={this.handleChange}
        />
        <button>Login</button>
        <button>Signup</button>
      </form>
    )
  }
}

export default connect(null, null)(UserInputForm);