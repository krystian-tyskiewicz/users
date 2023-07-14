import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/app/types'

export interface CounterState {
  currentUser: User | null
}

const initialState: CounterState = {
  currentUser: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = usersSlice.actions

export default usersSlice.reducer
