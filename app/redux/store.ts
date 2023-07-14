import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { usersApi } from './services/users'
import { usersSlice } from './slices/users'

const rootReducer = combineReducers({
  api: usersApi.reducer,
  users: usersSlice.reducer ,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
