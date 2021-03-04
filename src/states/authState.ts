import { reducerWithInitialState } from "typescript-fsa-reducers";
import { authActions } from "actions/authAction";

export interface AuthState {
  userAuth: any;
}

export const authInitialState: AuthState = {
  userAuth: "",
};

export const authReducers = reducerWithInitialState(authInitialState)
  .case(authActions.updateUserAuth, (state, userParams: string) => {
    return {
      ...state,
      user: userParams
    }
  })
