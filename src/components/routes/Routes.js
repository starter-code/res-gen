import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  ContributorsPage,
  NotFoundPage,
  CrispPage,
  CascadePage,
} from '../pages';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors" component={ContributorsPage} />
        <Route exact path="/crisp" component={CrispPage} />
        <Route exact path="/cascade" component={CascadePage} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
