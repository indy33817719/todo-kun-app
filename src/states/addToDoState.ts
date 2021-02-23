import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addToDoActions } from 'actions/addToDoAction';

export interface AddToDoAction {
  isOpen: boolean,
}

export const addToDoInitialState: AddToDoAction = {
  isOpen: false,
}

export const addToDoReducers = reducerWithInitialState(addToDoInitialState)
  .case(addToDoActions.updateOpenAddToDo, (state, isOpen: boolean) => {
    console.log(state)
    console.log('reducer')
    return {
      ...state,
      isOpen: isOpen
    }
  })