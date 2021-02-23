import React from "react";
import { useAddToDoHook } from 'hooks/addToDoHook'

export const AddToDoButton: React.FC = () => {
  const addToDoHook = useAddToDoHook()

  return (
    <>
      <div className="mr-2 mt-2 flex flex-col justify-center items-center">
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          onClick={() => addToDoHook.addToDo.updateOpen(true) }
        >
          ToDoを登録する
        </button>
      </div>
    </>
  );
};
