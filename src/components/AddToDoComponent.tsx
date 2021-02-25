import React from "react";
import { useAddToDoHook } from "hooks/addToDoHook";

export const AddToDo: React.FC = () => {
  const addToDoHook = useAddToDoHook();

  return (
    <>
      {addToDoHook.addToDo.isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between items-center p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">ToDoを登録する</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      console.log("click2");
                      addToDoHook.addToDo.updateOpen(false);
                    }}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-4xl">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col">
                    <label className="leading-loose">タイトル</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="タイトルを入力してください"
                    />
                    <label className="leading-loose">内容</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="内容を入力してください"
                    />
                    <div className="flex justify-between mt-6">
                      <div>
                        <label className="leading-loose mr-2">予定</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-28 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="予定時間(h)"
                        />
                      </div>
                      <div>
                        <label className="leading-loose mr-2">実績</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-28 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="実績時間(h)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => addToDoHook.addToDo.updateOpen(false)}
                  >
                    キャンセル
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => addToDoHook.addToDo.updateOpen(false)}
                  >
                    登録
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
