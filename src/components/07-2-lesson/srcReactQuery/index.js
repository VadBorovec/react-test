import App1 from './App';

import './index.css';
import { StateContext } from './context/StateContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StateContext>
        <App1 />
      </StateContext>
    </QueryClientProvider>
  );
};
