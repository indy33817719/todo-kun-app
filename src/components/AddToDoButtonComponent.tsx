import React from "react";

export const AddToDoButton: React.FC = () => {
  return (
    <>
      <div className="inline-block mr-2 mt-2">
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
        >
          ToDoを登録する
        </button>
      </div>
    </>
  );
};
