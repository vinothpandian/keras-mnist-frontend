import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

const Menubar = () => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Keras - MNIST detection
        </Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Menubar;
