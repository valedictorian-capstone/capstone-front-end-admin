import { createStore, compose, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { useRootReducer } from "./reducers";

export const useStoreModule = (): Store => {
    const rootReducer = useRootReducer();
    const composeEnhancers = composeWithDevTools({});
    const middlewares: never[] = [];
    const enhancers = [applyMiddleware(...middlewares)];
    const store: Store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
}