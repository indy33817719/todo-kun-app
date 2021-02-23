import { createStore, applyMiddleware, compose } from 'redux';
import { RootReducer, RootState } from 'stores/reducers'
import { countInitialState } from 'states/hogeState'
import thunk from 'redux-thunk';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootInitialState: RootState = {
  count: countInitialState
}

const store = createStore(
  RootReducer,
  rootInitialState,
  composeReduxDevToolsEnhancers()
  );

export default store;