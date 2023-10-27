import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  count: number
}

const initialState: IState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetState: () => ({
      ...initialState,
    }),

    increase: (state, action) => {
      const { count } = action?.payload ?? {}

      return {
        ...state,
        count,
      }
    },
  },
})

export const { increase, resetState } = counterSlice.actions

export default counterSlice.reducer
