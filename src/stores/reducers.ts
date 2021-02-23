import { combineReducers } from 'redux'
import { countReducer, CountState } from 'states/hogeState'

//------------------------------
// States
//------------------------------
export type RootState = {
 count: CountState,
}

//------------------------------
// Reducers
//------------------------------
export const RootReducer = combineReducers({
 count: countReducer,
})