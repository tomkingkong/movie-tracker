import React, { Component } from 'react';

import ContentRoute from '../../containers/ContentRoute/';
import FormRoute from '../../containers/UserInputForm/FormRoute';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="header">
          <FormRoute />
          <h1 className="title">Hanks Movies</h1>
        </header>
        <ContentRoute />
      </div>
    );
  }
}

export default App;