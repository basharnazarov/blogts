import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { rows } from '../stores/data'

export interface postState {
  total: number
}

const initialState: postState = {
  total: rows.length,
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.total += 1
    // },
    // decrement: (state) => {
    //   state.total -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.total += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer