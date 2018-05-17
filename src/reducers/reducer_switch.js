import { handleActions } from 'redux-actions';
import { DETECT_SKETCH, DETECT_SKETCH_ASYNC } from '../actions';

const defaultState = {
  text: 'Sketch here',
};

export default handleActions(
  {
    [DETECT_SKETCH_ASYNC]: () => ({
      text: 'loading',
    }),
    [DETECT_SKETCH]: (state, action) => ({
      text: `I guess you wrote ${action.payload}`,
    }),
  },
  defaultState,
);
