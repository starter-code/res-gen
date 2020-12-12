import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ContributorsPage, NotFoundPage, FAQPage } from 'src/pages';

// Lazy load EditorPage so that initial startup burden is reduced
const EditorPage = React.lazy(() => import('src/pages/EditorPage'));

export const Routes = () => {
  return (
    <div className="page">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contributors" component={ContributorsPage} />
          <Route exact path="/faq-page" component={FAQPage} />
          <Route exact path="/editor-page" component={EditorPage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
