import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const countAction = {
  increment: actionCreator<number>('ACTIONS_INCREMENT'),
};