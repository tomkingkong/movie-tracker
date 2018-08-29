import React, { Component } from 'react';

import ContentRoute from '../../containers/ContentRoute/';
import SignUpUser from '../../containers/UserInputForm/SignUpUser';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SignUpUser />
        <ContentRoute />
      </div>
    );
  }
}

export default App;