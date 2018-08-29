import React, { Component } from 'react';
import ContentRoute from '../../containers/ContentRoute/';
import LoginUser from '../../containers/UserInputForm/LoginUser';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <LoginUser />
        <ContentRoute />
      </div>
    );
  }
}

export default App;
