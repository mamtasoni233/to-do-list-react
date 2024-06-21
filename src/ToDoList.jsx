import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';

export default function ToDoList() {
  let [toDo, SetTodo] = useState([]);
  let toDoSubmit = (event) => {
    event.preventDefault();
    let toDoInput = event.target.toDoInput.value;
    if (!toDo.includes(toDoInput)) {
      let finalToDoList = [...toDo, toDoInput];
      SetTodo(finalToDoList);
    } else {
      alert('already exist');
    }
  };
  let list = toDo.map((value, index) => {
    let toDoItems = {
      value,
      index,
      toDo,
      SetTodo,
    };
    return <ToDoListItem toDoItems={toDoItems} key={index} />;
  });
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-4">
        To Do List With Child Component
      </h1>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-lg p-6">
          <form id="toDoForm" onSubmit={toDoSubmit}>
            <div className="mb-4 flex items-center border-b-2 border-black-500 py-2">
              <input
                type="text"
                name="toDoInput"
                id="toDoInput"
                className="w-full px-4 py-2 mr-2 rounded-lg border-black focus:outline-none focus:border-blue-500"
                placeholder="Add New List....."
                required
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 
                    text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </form>
          <ul id="to-do-list">{list}</ul>
        </div>
      </div>
    </>
  );
}
