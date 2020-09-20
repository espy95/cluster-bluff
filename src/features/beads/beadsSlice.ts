import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import { setBoardSize, setSquareState } from '../board/boardSlice'
import { BEADS, BOARD_SIZES } from '../../utils/constants'

interface BeadsState {
  amount: AmountType
  selected: BeadType
}

const initialState: BeadsState = {
  amount: {
    'Red': BOARD_SIZES.Small,
    'Blue': BOARD_SIZES.Small,
    'Green': BOARD_SIZES.Small
  },
  selected: 'Red'
}

export const beadsSlice = createSlice({
  name: 'beads',
  initialState,
  reducers: {
    selectBead: (state, action: PayloadAction<BeadType>) => {
      state.selected = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setBoardSize, (state, action) => {
        BEADS.map(bead => {
          state.amount[bead] = BOARD_SIZES[action.payload]
        })
        state.selected = initialState.selected
      })
      .addCase(setSquareState, (state, action) => {
        state.amount[state.selected] -= 1
      })
  },
})

export const { selectBead } = beadsSlice.actions

export const getSelectedBead = ({ beads }: RootState) => beads.selected
export const getBeadAmount = (bead: BeadType) => ({ beads }: RootState) => beads.amount[bead]

export default beadsSlice.reducer
