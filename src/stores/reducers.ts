import { combineReducers } from "redux";
import { countReducer, CountState } from "states/hogeState";
import { addToDoReducers, AddToDoAction } from "states/addToDoState";

//------------------------------
// States
//------------------------------
export type RootState = {
 count: CountState,
 addToDo: AddToDoAction,
}

//------------------------------
// Reducers
//------------------------------
export const RootReducer = combineReducers({
  count: countReducer,
  addToDo: addToDoReducers,
});
