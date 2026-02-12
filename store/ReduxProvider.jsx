// store/ReduxProvider.js
'use client';

import { Provider } from 'react-redux';
import { store } from './store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SessionProvider } from "next-auth/react"; // Import SessionProvider

export function ReduxProvider({ children }) {
  const queryClient = new QueryClient();

  return (

    <SessionProvider>

      <QueryClientProvider client={queryClient}>

        <Provider store={store}>{children}</Provider>

      </QueryClientProvider>

    </SessionProvider>
  );
}


