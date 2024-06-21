import React, { useState } from 'react';

export default function ToDoListItem({ toDoItems }) {
  let { value, index, toDo, SetTodo } = toDoItems;
  let [status, setStatus] = useState(false);

  const deleteTodo = () => {
    let finalToDo = toDo.filter((v, i) => i !== index);
    SetTodo(finalToDo);
  };
  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li
      onClick={checkStatus}
      className={`border-b border-gray-200 flex items-center justify-between py-4  p-5 m-3 ${
        status ? 'line-through bg-yellow-300 text-red-600' : ''
      }`}
    >
      {value}
      <span onClick={deleteTodo}>&times;</span>
    </li>
  );
}
