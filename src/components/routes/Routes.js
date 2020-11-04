import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  ContributorsPage,
  NotFoundPage,
  FolesPage,
  MahomesPage,
  EditorPlayground,
} from 'src/pages';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors" component={ContributorsPage} />
        <Route exact path="/foles" component={FolesPage} />
        <Route exact path="/mahomes" component={MahomesPage} />
        <Route path="/custom-playground" component={EditorPlayground} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
