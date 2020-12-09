import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  ContributorsPage,
  NotFoundPage,
  EditorPage,
  FAQPage,
} from 'src/pages';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors" component={ContributorsPage} />
        <Route exact path="/faq-page" component={FAQPage} />
        <Route
          exact
          path="/editor-page"
          render={(props) => {
            return <EditorPage {...props} />;
          }}
        />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
