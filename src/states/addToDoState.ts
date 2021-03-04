import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addToDoActions } from 'actions/addToDoAction';
import { EditToDo } from 'type'

export interface AddToDoState {
  isOpen: boolean,
  toDo: EditToDo,
}

export const addToDoInitialState: AddToDoState = {
  isOpen: false,
  toDo: {
    title: "",
    content: "",
    scheduledTime: "",
    actualTime: "",
    isDone: false,
  }
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
  .case(addToDoActions.updateToDo, (state, editToDo: EditToDo) => {
    return {
      ...state,
      toDo: editToDo
    }
  })