import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import fire from "firebase/config";
import { ToDos } from "components/ToDosComponent";
import { AddToDoButton } from "components/AddToDoButtonComponent";
import { AddToDo } from "components/AddToDoComponent";
// import { Login } from 'components/loginComponent'

export const App: React.FC = () => {
  const dispatch = useDispatch();

  
  return (
    <div>
      { user ? (
        <>
        <AddToDoButton></AddToDoButton>
        <AddToDo></AddToDo>
        <ToDos></ToDos>
        </>
      ) : (
        
      )}
    </div>
  );
};
