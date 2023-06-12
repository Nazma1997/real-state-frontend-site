import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { serverApi } from './apiSlice'
export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
})


setupListeners(store.dispatch)