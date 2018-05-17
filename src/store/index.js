import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// To enable Redux devtools during development
// eslint-disable-next-line
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Enable during production
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
