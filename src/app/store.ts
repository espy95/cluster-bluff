import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import beadsReducer from '../features/beads/beadsSlice'
import boardReducer from '../features/board/boardSlice'
import playerReducer from '../features/player/playerSlice'

export const store = configureStore({
  reducer: {
    beads: beadsReducer,
    board: boardReducer,
    player: playerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
