import React, { useState } from 'react';
import TodoRequests from '../DAL/requests';
import { RefetchOptions } from 'react-query';

interface TodoFormProps {
  refetchTodos: any;
}

export const TodoForm: React.FC<TodoFormProps> = ({ refetchTodos }) => {
  const [todoText, setTodoText] = useState('');

  const todoFormInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const changeTodo = async () => {
    if (todoText.trim() !== '') {
      await TodoRequests.addTodo(todoText);
      setTodoText('');
      await refetchTodos();
    }
  };

  return (
    <div className="flex items-center mb-4 w-full">
      <input type="text" value={todoText} onChange={todoFormInputChange} className="flex-grow border-2 border-black p-2 rounded mr-2" />
      <button onClick={changeTodo} className="bg-blue-500 text-white p-2 rounded">submit</button>
    </div>
  );
};
