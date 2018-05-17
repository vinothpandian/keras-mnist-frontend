import { createAction } from 'redux-actions';

export const DETECT_SKETCH = 'DETECT_SKETCH';
export const DETECT_SKETCH_ASYNC = 'DETECT_SKETCH_ASYNC';

export const detectSketchAsync = createAction(DETECT_SKETCH_ASYNC);
export const detectSketch = createAction(DETECT_SKETCH);
