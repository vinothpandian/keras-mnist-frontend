import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';
import Typography from 'material-ui/Typography';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import RestoreIcon from '@material-ui/icons/Restore';
import SvgSketchCanvas from 'react-sketch-canvas';
import { Spring } from 'react-spring';
import { detectSketchAsync } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.canvas = null;
  }

  handleClick() {
    this.canvas
      .exportAsImage('jpeg')
      .then((data) => {
        this.props.detectSketchAsync(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div style={{ padding: '1rem' }}>
        <Grid container spacing={24} direction="column" alignItems="center" justify="center">
          <Grid item xs sm={10} md={8} lg={6}>
            <Paper>
              <Card>
                <CardContent>
                  <SvgSketchCanvas
                    ref={(element) => {
                      this.canvas = element;
                    }}
                    styles={{
                      boxSizing: 'border-box',
                      border: '2px solid red',
                      borderRadius: 'none',
                    }}
                    width={400}
                    height={400}
                    strokeColor="black"
                    strokeWidth={10}
                  />
                  <Grid container justify="center">
                    <IconButton
                      onClick={() => {
                        this.canvas.undo();
                      }}
                    >
                      <UndoIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        this.canvas.redo();
                      }}
                    >
                      <RedoIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        this.canvas.clearCanvas();
                      }}
                    >
                      <RestoreIcon />
                    </IconButton>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography align="center" variant="title">
                    {this.props.message === 'loading' ? (
                      <CircularProgress color="secondary" size={24} />
                    ) : (
                      <Spring
                        from={{ opacity: 0, fontSize: '0.25rem' }}
                        to={{ opacity: 1, fontSize: '1.25rem' }}
                      >
                        {styles => <span style={styles}>{this.props.message}</span>}
                      </Spring>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Button onClick={this.handleClick} variant="raised" color="primary">
              Find
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
  detectSketchAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.message.text,
});

const mapDispatchToProps = dispatch => bindActionCreators({ detectSketchAsync }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
