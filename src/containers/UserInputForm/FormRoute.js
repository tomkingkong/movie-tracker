import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SignUpUser from '../../containers/UserInputForm/SignUpUser';
import LogInUser from '../../containers/UserInputForm/LogInUser';
import LogOutUser from '../../containers/UserInputForm/LogOutUser';

export const FormRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={LogInUser} />
      <Route exact path="/signup" component={SignUpUser} />
      <Route exact path="/:user_id" component={LogOutUser} />
    </Switch>
  )
}

export default withRouter(FormRoute);