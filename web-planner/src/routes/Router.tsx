import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { InitialPage } from '../pages/InitialPage';
import { LoginPage } from '../pages/LoginPage';
import { PlannerPage } from '../pages/PlannerPage';
import { SignupPage } from '../pages/SignupPage';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/planner" component={PlannerPage} />

        <Route path="/">
          <div>
            <h2>Erro 404</h2>
            <p>Ops! Página não encontrada</p>
          </div>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};
