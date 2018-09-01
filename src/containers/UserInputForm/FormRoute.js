import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SignUpUser from './SignUpUser';
import LogInUser from './LogInUser';
import UserNav from './UserNav';
import { Home } from './Home';

export const FormRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogInUser} />
      <Route exact path="/signup" component={SignUpUser} />
      <Route exact path="/:user_id" component={UserNav} />
    </Switch>
  )
}

export default withRouter(FormRoute);