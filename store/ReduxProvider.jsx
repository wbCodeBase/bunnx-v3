// store/ReduxProvider.js
'use client';

import { Provider } from 'react-redux';
import { store } from './store';

import { SessionProvider } from "next-auth/react"; // Import SessionProvider

export function ReduxProvider({ children }) {
  return (

    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}


