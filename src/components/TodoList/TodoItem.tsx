import React, { useState, ChangeEvent } from 'react';
import TodoRequests from '../DAL/requests';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  refetchTodos: () => Promise<void>;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, refetchTodos }) => {
  const [changing, setChanging] = useState(false);
  const [changeTodoText, setChangeTodoText] = useState(todo.text);
  const [completeTodo, setComplete] = useState(todo.completed);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeTodoText(event.target.value);
  };

  const editTodo = async () => {
    setChanging(false);
    await TodoRequests.changeTodo(todo.id, changeTodoText);
    refetchTodos();
  };

  const startEditing = () => {
    setChanging(true);
  };

  const setCompleteOrNot = async () => {
    setComplete(!completeTodo);
    await TodoRequests.completeTodo(todo.id, !completeTodo);
    refetchTodos();
  };

  return (
    <div className={`flex items-center mb-4 w-full border-2 border-black bg-white p-4 mx-2 rounded ${todo.completed ? 'bg-gray-200' : 'bg-white-200'}`}>
      <input type="checkbox" className="mr-2" checked={completeTodo} onChange={setCompleteOrNot} />
      {changing ? (
        <div className="flex items-center w-full">
          <input
            type="text"
            value={changeTodoText}
            onChange={handleInputChange}
            placeholder="Enter todo"
            className="mr-2 border p-2 rounded flex-grow"
          />
          <button onClick={editTodo} className="bg-green-500 text-white p-2 rounded flex items-center">
            Confirm
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <span className={`font-bold ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
          <div className="ml-auto flex space-x-2">
            <button onClick={startEditing} className="bg-green-500 text-white p-2 rounded flex items-center">
              Edit
            </button>
            <button onClick={async () => { await TodoRequests.deleteTodo(todo.id); refetchTodos(); }} className="bg-red-500 text-white p-2 rounded flex items-center">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};