import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { useRootReducer } from './reducers';
import { useRootSaga } from './sagas';

export const useStoreModule = (): Store => {
  const rootReducer = useRootReducer();
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store: Store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(useRootSaga().useInit);
  return store;
};