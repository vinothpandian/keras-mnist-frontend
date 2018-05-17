import React from 'react';
import { Grid, CircularProgress } from 'material-ui';
import styled from 'react-emotion';

const Wrapper = styled.div({
  height: '90%',
  display: 'flex',
  flexWrap: 'wrap',
});

const Loading = () => (
  <Wrapper>
    <Grid
      container
      spacing={0}
      style={{ flexGrow: 1 }}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <CircularProgress size={50} />
      </Grid>
    </Grid>
  </Wrapper>
);

export default Loading;
