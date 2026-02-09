// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { myApi } from './api/myApi';

export const store = configureStore({
  reducer: {
    // Add the RTK Query API slice reducer
    [myApi.reducerPath]: myApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

setupListeners(store.dispatch);
