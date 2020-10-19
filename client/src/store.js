import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootSaga from './sagas';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleWare();

const middleware = [sagaMiddleware];

export const store =
  process.env.NODE_ENV === 'development'
    ? createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
    : createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
