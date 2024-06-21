// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import ToDoList from './ToDoList';
function App() {
  let [todoList, setTodoList] = useState([]);
  let saveTodoList = (e) => {
    e.preventDefault();
    let toDoName = e.target.toDoName.value;
    if (!todoList.includes(toDoName)) {
      let finalTodoList = [...todoList, toDoName];
      setTodoList(finalTodoList);
    } else {
      NotificationManager.warning('To do list already exits.');
    }
  };
  let list = todoList.map((value, i) => {
    return (
      <ToDoListItems
        value={value}
        key={i}
        indexNumber={i}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });
  return (
    <div className="App container mx-auto my-10">
      <NotificationContainer />
      <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <form id="todo-form" onSubmit={saveTodoList}>
            <div className=" mb-4 flex items-center border-b-2 border-teal-500 py-2">
              <input
                type="text"
                className="w-full px-4 py-2 mr-2 rounded-lg border-black focus:outline-none focus:border-blue-500"
                id="toDoName"
                name="toDoName"
                placeholder="Add new task"
                required
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 
                text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </form>
          <ul id="todo-list">{list}</ul>
        </div>
      </div>
      <div className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"></div>
      {/* todo list with child component */}
      <ToDoList />
    </div>
  );
}

export default App;

const ToDoListItems = ({ value, indexNumber, todoList, setTodoList }) => {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li
      onClick={checkStatus}
      className={`border-b border-gray-200 flex items-center justify-between py-4 bg-teal-500 p-5 m-3 text-white ${
        status ? 'line-through bg-red-300 ' : ''
      }`}
    >
      {value}
      <span onClick={deleteRow} className="text-[25px]">
        &times;
      </span>
    </li>
  );
};
