import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  ContributorsPage,
  NotFoundPage,
  CrispPage,
  CascadePage,
  GoogleDocPage,
} from 'pages';
// import GoogleDocPage from '../pages/GoogleDocPage';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors" component={ContributorsPage} />
        <Route exact path="/crisp" component={CrispPage} />
        <Route exact path="/cascade" component={CascadePage} />
        <Route exact path="/googledoc" component={GoogleDocPage} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
