import React, { useState, ChangeEvent } from "react";
import TodoRequests from "../DAL/requests";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [changing, setChanging] = useState(false);
  const [changeTodoText, setChangeTodoText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeTodoText(event.target.value);
  };

  const editTodo = (text: string) => {
    setChanging(false);
    TodoRequests.changeTodo(todo.id, text);
  };

  const startEditing = () => {
    setChanging(true);
  };

  return (
    <div>
      <input
        type="checkbox"
      />
      {changing ? (
        <div>
          <input
            type="text"
            value={changeTodoText}
            onChange={handleInputChange}
            placeholder="Enter todo"
          />
          <button onClick={() => editTodo(changeTodoText)}>Confirm</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={startEditing}>Edit</button>
        </div>
      )}
      <button onClick={() => TodoRequests.deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};