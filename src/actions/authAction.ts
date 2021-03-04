import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const authActions = {
  updateUserAuth: actionCreator<any>("ACTIONS_UPDATE_USER_AUTH"),
};
