import React from "react";
import { useSelector} from "react-redux";
import { RootState } from 'stores/reducers'
import { ToDos } from "components/ToDosComponent";
import { AddToDoButton } from "components/AddToDoButtonComponent";
import { AddToDo } from "components/AddToDoComponent";
import { Login } from 'components/LoginComponent'

export const App: React.FC = () => {
  const userAuth = useSelector((state: RootState) => state.auth.userAuth);

  return (
    <div>
      { userAuth ? (
        <>
        <AddToDoButton></AddToDoButton>
        <AddToDo></AddToDo>
        <ToDos></ToDos>
        </>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};
