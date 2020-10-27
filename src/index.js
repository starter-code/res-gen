import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { Font } from 'react-pdf';
import Roboto from 'fonts/Roboto-Regular.ttf';
import RobotoBold from 'fonts/Roboto-Bold.ttf';
import Merriweather from 'fonts/Merriweather-Regular.ttf';
import MerriweatherLight from 'fonts/Merriweather-Light.ttf';
import MerriweatherBold from 'fonts/Merriweather-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: Roboto }, // font-style: normal, font-weight: normal
    { src: RobotoBold, fontWeight: 700 },
  ],
});

Font.register({
  family: 'Merriweather',
  fonts: [
    { src: Merriweather },
    { src: MerriweatherLight },
    { src: MerriweatherBold, fontWeight: 700 },
  ],
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
