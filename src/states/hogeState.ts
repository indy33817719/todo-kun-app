import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { countAction } from '../actions/countActions';

export interface CountState {
  value: number,
}

export const countInitialState: CountState = {
  value: 0
}

export const countReducer = reducerWithInitialState(countInitialState)
  .case(countAction.increment, (state, count) => {
    console.log(state)
    console.log(state.value)
    console.log('reducer')
    const newValue = state.value++
    console.log(newValue)
    return {
      ...state,
      value: state.value++
    }
  })