import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

enum BoardSizes {
  'Small' = 3,
  'Medium' = 6,
  'Large' = 12,
}

interface BoardState {
  square: SquareType
  size: BoardType
}

const initialState: BoardState = {
  square: {},
  size: 'Small',
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setSquareState: (state, action: PayloadAction<number>) => {
      state.square[action.payload]
        ? (state.square[action.payload] += 1)
        : (state.square[action.payload] = 1)
    },
    setBoardSize: (state, action: PayloadAction<BoardType>) => {
      state.size = action.payload
      state.square = {}
    },
  },
})

export const { setSquareState, setBoardSize } = boardSlice.actions

export const getBoardSize = ({ board }: RootState) => BoardSizes[board.size]
export const getBoardType = ({ board }: RootState) => board.size
export const getSquareState = (square: number) => ({ board }: RootState) => board.square[square]

export default boardSlice.reducer
