import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const addToDoActions = {
  updateOpenAddToDo: actionCreator<boolean>('ACTIONS_UPDATE_OPEN_ADD_TO_DO'),
};