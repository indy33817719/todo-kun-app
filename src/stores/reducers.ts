import { combineReducers } from "redux";
import { countReducer, CountState } from "states/hogeState";
import { AddToDoState, addToDoReducers } from "states/addToDoState";
import { AuthState, authReducers } from "states/authState";

//------------------------------
// States
//------------------------------
export type RootState = {
  count: CountState;
  addToDo: AddToDoState;
  auth: AuthState;
};

//------------------------------
// Reducers
//------------------------------
export const RootReducer = combineReducers({
  count: countReducer,
  addToDo: addToDoReducers,
  auth: authReducers,
});
