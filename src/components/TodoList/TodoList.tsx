import React from "react";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;