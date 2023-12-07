import React from 'react';
import {TodoItem} from './TodoItem';
import { RefetchOptions } from 'react-query';

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  refetchTodos: any;
}

const TodoList: React.FC<TodoListProps> = ({ todos, refetchTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="mb-2">
          <TodoItem todo={todo} refetchTodos={refetchTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;