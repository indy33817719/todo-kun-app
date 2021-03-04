import { createStore, compose } from "redux";
import { RootReducer } from "stores/reducers";
import thunk from "redux-thunk";

// ChromeでReduxDevToolsを使用する為、window型を拡張
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(RootReducer, composeReduxDevToolsEnhancers());

export default store;
