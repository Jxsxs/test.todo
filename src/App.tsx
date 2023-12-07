import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { TodoForm } from './components/TodoList/TodoForm';
import TodoList from './components/TodoList/TodoList';

import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient();

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const { isLoading, error, data, refetch } = useQuery<Todo[]>('todos', () =>
    fetch('http://localhost:3001/api/todos').then((response) => response.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any)?.message}</div>;

  const todos = data || [];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold bg-gray-300 p-2 mb-4 w-full">Todos: ({todos.length})</h1>
          <TodoForm refetchTodos={refetch} />
          <TodoList todos={todos} refetchTodos={refetch} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;