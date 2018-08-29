import React, { Component } from 'react';

import ContentRoute from '../../containers/ContentRoute/';
import { FormRoute } from '../../containers/UserInputForm/FormRoute';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FormRoute />
        <ContentRoute />
      </div>
    );
  }
}

export default App;