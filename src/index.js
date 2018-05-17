import React from 'react';
import { render } from 'react-dom';
// import App from './App';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const App = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

// eslint-disable-next-line
render(<App />, document.querySelector('#root'));
