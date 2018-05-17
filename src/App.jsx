import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';
import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import { injectGlobal } from 'emotion';
import store from './store';
import Menubar from './components/Menubar';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

injectGlobal('#root {height: 100%}');

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export default () => (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Menubar />
        <Home />
      </MuiThemeProvider>
    </React.Fragment>
  </Provider>
);
