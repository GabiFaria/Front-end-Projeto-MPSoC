import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Simulation from './pages/simulation';
import Welcome from './pages/welcome';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exect path="/simu/:id" component={Simulation} />

        <Route exect path="/">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;