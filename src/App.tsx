import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TodoList from './components/TodoList/TodoList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <TodoList />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;