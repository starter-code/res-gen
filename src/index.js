import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { Font } from 'react-pdf';
import Roboto from 'fonts/Roboto-Regular.ttf';
import RobotoBold from 'fonts/Roboto-Bold.ttf';

// const Roboto = 'https://fonts.googleapis.com/css?family=Roboto:700';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: Roboto }, // font-style: normal, font-weight: normal
    { src: RobotoBold, fontWeight: 700 },
  ],
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
