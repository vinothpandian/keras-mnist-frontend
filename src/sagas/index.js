import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { DETECT_SKETCH, DETECT_SKETCH_ASYNC } from '../actions';

const apiCall = imageURL =>
  axios
    .post('http://localhost:5000/predict', {
      imageURL: imageURL.split(',')[1],
    })
    .then(response => response.data)
    .catch((err) => {
      throw err;
    });
function* detectSketchAsync(action) {
  const response = yield call(apiCall, action.payload);
  yield put({ type: DETECT_SKETCH, payload: response });
}

function* watchDetectSketchAsync() {
  yield takeEvery(DETECT_SKETCH_ASYNC, detectSketchAsync);
}

export default function* rootSaga() {
  yield all([watchDetectSketchAsync()]);
}
