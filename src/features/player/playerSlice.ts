import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { setBoardSize, setSquareState } from '../board/boardSlice'
import theme from '../../app/theme'

interface PlayerState {
  turn: string
  color: string
}

const initialState: PlayerState = {
  turn: 'Player 1',
  color: theme.palette.secondary.main,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setBoardSize, (state, action) => {
        state.turn = initialState.turn
        state.color = initialState.color
      })
      .addCase(setSquareState, (state, action) => {
        if (state.turn === 'Player 1') {
          state.turn = 'Player 2'
          state.color = theme.palette.primary.main
        } else {
          state.turn = 'Player 1'
          state.color = theme.palette.secondary.main
        }
      })
  },
})

export const getPlayer = ({ player }: RootState) => player

export default playerSlice.reducer
